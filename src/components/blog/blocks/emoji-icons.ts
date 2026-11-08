/**
 * Custom blog emoji: small inline SVGs (32×32 viewBox) in the site palette.
 * Colours are literal hex because SVG presentation attributes can't read CSS
 * custom properties: amber ≈ --primary, lavender ≈ --blog-heading,
 * mint ≈ --code-string.
 */

const AMBER = "#F5A524";
const AMBER_DARK = "#B9780F";
const AMBER_LIGHT = "#FFE29A";
const LAVENDER = "#BCA8FA";
const LAVENDER_DEEP = "#6D5BD0";
const MINT = "#4DD2A4";
const INK = "#1B1F2A";
const PAPER = "#F5F7FA";
const STEEL = "#9AA4B2";
const SKY = "#7CC4FF";

export const emojiIcons = {
  grimace: `
    <circle cx="16" cy="16" r="14" fill="${AMBER}"/>
    <ellipse cx="11" cy="12.5" rx="1.8" ry="2.4" fill="${INK}"/>
    <ellipse cx="21" cy="12.5" rx="1.8" ry="2.4" fill="${INK}"/>
    <rect x="8.5" y="18" width="15" height="7" rx="3" fill="${PAPER}" stroke="${INK}" stroke-width="1.4"/>
    <path d="M8.5 21.5h15M12.25 18v7M16 18v7M19.75 18v7" stroke="${INK}" stroke-width="1.2"/>
    <path d="M26 4.5c1.5 2.1 2.2 3.5 2.2 4.6a2.2 2.2 0 0 1-4.4 0c0-1.1.7-2.5 2.2-4.6z" fill="${SKY}"/>`,

  party: `
    <path d="M4 29 10.5 9.5 22.5 21.5z" fill="${AMBER}"/>
    <path d="M6.6 21.2 12.8 27.4M8.9 14.4 19.6 25.1" stroke="${LAVENDER}" stroke-width="2.4"/>
    <path d="M10.5 9.5 22.5 21.5" stroke="${AMBER_DARK}" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="21.5" cy="6" r="1.9" fill="${LAVENDER}"/>
    <circle cx="27.5" cy="12.5" r="1.7" fill="${MINT}"/>
    <rect x="15.5" y="2.5" width="3.2" height="3.2" rx=".7" fill="${MINT}" transform="rotate(20 17.1 4.1)"/>
    <path d="M23.5 17.5c1.6-1.1 3.2-.2 4.8-1.1" stroke="${AMBER}" stroke-width="1.8" stroke-linecap="round" fill="none"/>
    <path d="M14.2 8.6c.9-1.7-.4-3.2.7-4.7" stroke="${LAVENDER}" stroke-width="1.8" stroke-linecap="round" fill="none"/>`,

  eyes: `
    <ellipse cx="10.5" cy="16" rx="7.2" ry="10" fill="${PAPER}" stroke="${INK}" stroke-width="1.2"/>
    <ellipse cx="21.5" cy="16" rx="7.2" ry="10" fill="${PAPER}" stroke="${INK}" stroke-width="1.2"/>
    <circle cx="13.6" cy="17" r="3.6" fill="${INK}"/>
    <circle cx="24.6" cy="17" r="3.6" fill="${INK}"/>
    <circle cx="14.8" cy="15.7" r="1.1" fill="${PAPER}"/>
    <circle cx="25.8" cy="15.7" r="1.1" fill="${PAPER}"/>`,

  fire: `
    <path d="M16 2c5 6 11 10 11 17a11 11 0 0 1-22 0c0-5 3-8 5-10 0 3 1.5 5 3 6-.5-5 .5-9 3-13z" fill="${AMBER}"/>
    <path d="M16 14c2.5 3 5 4.5 5 8a5 5 0 0 1-10 0c0-3 2.5-5 5-8z" fill="${AMBER_LIGHT}"/>`,

  sparkles: `
    <path d="M13 5c1 7 3 10 10 12-7 2-9 5-10 12-1-7-3-10-10-12 7-2 9-5 10-12z" fill="${LAVENDER}"/>
    <path d="M24 2c.5 3.5 1.5 5 5 6-3.5 1-4.5 2.5-5 6-.5-3.5-1.5-5-5-6 3.5-1 4.5-2.5 5-6z" fill="${AMBER}"/>
    <path d="M26 20c.3 2.3.9 3.4 3 4-2.1.6-2.7 1.7-3 4-.3-2.3-.9-3.4-3-4 2.1-.6 2.7-1.7 3-4z" fill="${MINT}"/>`,

  bulb: `
    <path d="M16 1.5v3M5.5 6l2.1 2.1M26.5 6l-2.1 2.1M2.5 16h3M26.5 16h3" stroke="${LAVENDER}" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 7a8 8 0 0 0-4.6 14.5c.8.6 1.1 1.4 1.1 2.3V25h7v-1.2c0-.9.3-1.7 1.1-2.3A8 8 0 0 0 16 7z" fill="${AMBER}"/>
    <path d="M14 20l1-3 1 2 1-2 1 3" stroke="${AMBER_DARK}" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <path d="M12.2 11.6a4.6 4.6 0 0 1 3-2" stroke="${PAPER}" stroke-width="1.4" stroke-linecap="round" fill="none"/>
    <rect x="12.5" y="25.5" width="7" height="2.6" rx="1" fill="${STEEL}"/>
    <rect x="13.5" y="28.6" width="5" height="1.8" rx=".9" fill="${STEEL}"/>`,

  bug: `
    <path d="M9 14 4.5 11.5M8.5 19.5h-5M9 25l-4.5 2.5M23 14l4.5-2.5M23.5 19.5h5M23 25l4.5 2.5M13.5 7.5 11 3.5M18.5 7.5 21 3.5" stroke="${STEEL}" stroke-width="1.6" stroke-linecap="round"/>
    <circle cx="11" cy="3.5" r="1.2" fill="${STEEL}"/>
    <circle cx="21" cy="3.5" r="1.2" fill="${STEEL}"/>
    <circle cx="16" cy="9.5" r="4.5" fill="${LAVENDER_DEEP}"/>
    <circle cx="14.5" cy="9" r="1" fill="${PAPER}"/>
    <circle cx="17.5" cy="9" r="1" fill="${PAPER}"/>
    <ellipse cx="16" cy="19.5" rx="8.5" ry="10" fill="${LAVENDER}"/>
    <path d="M16 10.5v18.5" stroke="${INK}" stroke-width="1.2"/>
    <circle cx="12.5" cy="16" r="1.8" fill="${AMBER}"/>
    <circle cx="19.5" cy="16" r="1.8" fill="${AMBER}"/>
    <circle cx="12.5" cy="23" r="1.6" fill="${AMBER}"/>
    <circle cx="19.5" cy="23" r="1.6" fill="${AMBER}"/>`,
} as const;

export type EmojiName = keyof typeof emojiIcons;
