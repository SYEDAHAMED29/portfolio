/**
 * Tiny synthesized sound effects for blog interactions (Web Audio API, no
 * audio files). Sounds only ever play in response to a reader's click, and
 * readers can turn them off with the article's sound toggle; the choice is
 * remembered in localStorage.
 */

export type SoundName = "pop" | "tick" | "break" | "fix" | "boop";

const STORAGE_KEY = "blog-sound";
export const SOUND_CHANGE_EVENT = "blog-sound-change";

let context: AudioContext | null = null;
let master: GainNode | null = null;

export function isSoundOn(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) !== "off";
  } catch {
    return true;
  }
}

export function setSoundOn(on: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY, on ? "on" : "off");
  } catch {
    // Storage blocked: the toggle still works for this page view.
  }
  window.dispatchEvent(new CustomEvent(SOUND_CHANGE_EVENT, { detail: on }));
}

function getAudio(): { ac: AudioContext; out: GainNode } | null {
  if (!context) {
    const AudioCtor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioCtor) return null;
    context = new AudioCtor();
    master = context.createGain();
    master.gain.value = 0.35;
    master.connect(context.destination);
  }
  if (context.state === "suspended") void context.resume();
  return master ? { ac: context, out: master } : null;
}

interface ToneOptions {
  freq: number;
  to?: number;
  start?: number;
  duration: number;
  type?: OscillatorType;
  gain?: number;
}

function tone(
  ac: AudioContext,
  out: AudioNode,
  { freq, to, start = 0, duration, type = "sine", gain = 0.25 }: ToneOptions,
) {
  const t = ac.currentTime + start;
  const osc = ac.createOscillator();
  const env = ac.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, t + duration);
  env.gain.setValueAtTime(0.0001, t);
  env.gain.exponentialRampToValueAtTime(gain, t + 0.008);
  env.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  osc.connect(env).connect(out);
  osc.start(t);
  osc.stop(t + duration + 0.02);
}

function crunch(
  ac: AudioContext,
  out: AudioNode,
  start: number,
  duration: number,
) {
  const t = ac.currentTime + start;
  const frames = Math.floor(ac.sampleRate * duration);
  const buffer = ac.createBuffer(1, frames, ac.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frames; i++)
    data[i] = (Math.random() * 2 - 1) * (1 - i / frames);
  const noise = ac.createBufferSource();
  const filter = ac.createBiquadFilter();
  const env = ac.createGain();
  noise.buffer = buffer;
  filter.type = "lowpass";
  filter.frequency.value = 1400;
  env.gain.value = 0.18;
  noise.connect(filter).connect(env).connect(out);
  noise.start(t);
}

/** Play a named effect, optionally after `delayMs`. No-op when muted. */
export function playSound(name: SoundName, delayMs = 0): void {
  if (!isSoundOn()) return;
  const audio = getAudio();
  if (!audio) return;
  const { ac, out } = audio;
  const s = delayMs / 1000;

  switch (name) {
    case "pop":
      tone(ac, out, {
        freq: 520,
        to: 880,
        start: s,
        duration: 0.07,
        gain: 0.22,
      });
      break;
    case "tick":
      tone(ac, out, {
        freq: 1320,
        start: s,
        duration: 0.04,
        type: "triangle",
        gain: 0.18,
      });
      tone(ac, out, {
        freq: 1760,
        start: s + 0.05,
        duration: 0.05,
        type: "triangle",
        gain: 0.14,
      });
      break;
    case "break":
      tone(ac, out, {
        freq: 240,
        to: 70,
        start: s,
        duration: 0.32,
        type: "sawtooth",
        gain: 0.16,
      });
      crunch(ac, out, s + 0.02, 0.16);
      break;
    case "fix":
      [523.25, 659.25, 783.99].forEach((freq, i) =>
        tone(ac, out, {
          freq,
          start: s + i * 0.075,
          duration: 0.18,
          gain: 0.18,
        }),
      );
      break;
    case "boop":
      tone(ac, out, {
        freq: 440,
        to: 700,
        start: s,
        duration: 0.12,
        gain: 0.22,
      });
      break;
  }
}

interface SweepOptions {
  from: number;
  to: number;
  duration: number;
  start?: number;
  gain?: number;
  type?: BiquadFilterType;
  q?: number;
}

/** Filtered noise whose pitch slides from `from` to `to` Hz (whooshes). */
function sweep(
  ac: AudioContext,
  out: AudioNode,
  {
    from,
    to,
    duration,
    start = 0,
    gain = 0.2,
    type = "bandpass",
    q = 1,
  }: SweepOptions,
) {
  const t = ac.currentTime + start;
  const frames = Math.floor(ac.sampleRate * duration);
  const buffer = ac.createBuffer(1, frames, ac.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < frames; i++) data[i] = Math.random() * 2 - 1;
  const noise = ac.createBufferSource();
  const filter = ac.createBiquadFilter();
  const env = ac.createGain();
  noise.buffer = buffer;
  filter.type = type;
  filter.Q.value = q;
  filter.frequency.setValueAtTime(from, t);
  filter.frequency.exponentialRampToValueAtTime(to, t + duration);
  env.gain.setValueAtTime(0.0001, t);
  env.gain.exponentialRampToValueAtTime(gain, t + 0.02);
  env.gain.exponentialRampToValueAtTime(0.0001, t + duration);
  noise.connect(filter).connect(env).connect(out);
  noise.start(t);
}

/**
 * A little sound for each custom emoji (see emoji-icons.ts). Unknown or
 * native emoji fall back to the classic boop.
 */
export function playEmojiSound(name?: string): void {
  if (!isSoundOn()) return;
  const audio = getAudio();
  if (!audio) return;
  const { ac, out } = audio;
  const notes = (
    freqs: number[],
    step: number,
    duration: number,
    gain: number,
    type: OscillatorType = "sine",
  ) =>
    freqs.forEach((freq, i) =>
      tone(ac, out, { freq, start: i * step, duration, gain, type }),
    );

  switch (name) {
    case "party":
      sweep(ac, out, {
        from: 3200,
        to: 1400,
        duration: 0.12,
        gain: 0.22,
        type: "highpass",
      });
      notes([784, 988, 1175, 1568], 0.05, 0.11, 0.11, "triangle");
      break;
    case "sparkles":
      notes([1568, 2093, 1760, 2349], 0.06, 0.09, 0.09);
      break;
    case "check":
      tone(ac, out, {
        freq: 1047,
        duration: 0.09,
        gain: 0.15,
        type: "triangle",
      });
      tone(ac, out, {
        freq: 1568,
        start: 0.09,
        duration: 0.2,
        gain: 0.15,
        type: "triangle",
      });
      break;
    case "fire":
      sweep(ac, out, {
        from: 400,
        to: 2400,
        duration: 0.35,
        gain: 0.28,
        q: 0.8,
      });
      break;
    case "rocket":
      tone(ac, out, { freq: 180, to: 1400, duration: 0.45, gain: 0.12 });
      sweep(ac, out, { from: 600, to: 3200, duration: 0.45, gain: 0.12 });
      break;
    case "bug":
      tone(ac, out, {
        freq: 150,
        duration: 0.25,
        gain: 0.07,
        type: "sawtooth",
      });
      tone(ac, out, {
        freq: 157,
        duration: 0.25,
        gain: 0.06,
        type: "sawtooth",
      });
      break;
    case "snail":
      tone(ac, out, { freq: 520, to: 260, duration: 0.6, gain: 0.16 });
      break;
    case "hourglass":
      tone(ac, out, {
        freq: 2000,
        duration: 0.03,
        gain: 0.14,
        type: "triangle",
      });
      tone(ac, out, {
        freq: 1500,
        start: 0.18,
        duration: 0.03,
        gain: 0.14,
        type: "triangle",
      });
      break;
    case "thinking":
      tone(ac, out, { freq: 196, to: 233, duration: 0.18, gain: 0.16 });
      tone(ac, out, {
        freq: 233,
        to: 207,
        start: 0.2,
        duration: 0.22,
        gain: 0.14,
      });
      break;
    case "grimace":
      tone(ac, out, {
        freq: 950,
        to: 620,
        duration: 0.14,
        gain: 0.06,
        type: "square",
      });
      break;
    case "puzzle":
      tone(ac, out, {
        freq: 1200,
        duration: 0.025,
        gain: 0.08,
        type: "square",
      });
      tone(ac, out, {
        freq: 800,
        start: 0.06,
        duration: 0.04,
        gain: 0.1,
        type: "square",
      });
      break;
    case "flask":
      [
        [600, 900],
        [750, 1100],
        [680, 1000],
      ].forEach(([freq, to], i) =>
        tone(ac, out, {
          freq,
          to,
          start: i * 0.08,
          duration: 0.06,
          gain: 0.14,
        }),
      );
      break;
    case "plug":
      tone(ac, out, {
        freq: 1400,
        to: 300,
        duration: 0.12,
        gain: 0.06,
        type: "sawtooth",
      });
      tone(ac, out, {
        freq: 880,
        start: 0.14,
        duration: 0.12,
        gain: 0.14,
        type: "triangle",
      });
      break;
    case "bulb":
      tone(ac, out, { freq: 1318.5, duration: 0.5, gain: 0.13 });
      tone(ac, out, { freq: 2637, duration: 0.3, gain: 0.05 });
      break;
    case "eyes":
      tone(ac, out, { freq: 660, duration: 0.07, gain: 0.14 });
      tone(ac, out, { freq: 880, start: 0.1, duration: 0.09, gain: 0.14 });
      break;
    default:
      playSound("boop");
  }
}
