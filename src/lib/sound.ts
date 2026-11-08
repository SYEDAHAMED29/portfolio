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
