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

  rocket: `
    <g transform="rotate(45 16 16)">
      <path d="M13 23h6l-1.4 6h-3.2z" fill="${AMBER}"/>
      <path d="M14.4 23h3.2l-.8 3.6h-1.6z" fill="${AMBER_LIGHT}"/>
      <path d="M10.2 17.5 6 22.5v3.5l4.2-2.2zM21.8 17.5l4.2 5v3.5l-4.2-2.2z" fill="${LAVENDER}"/>
      <path d="M16 2.5c4.2 3.2 6.2 8.3 6.2 13.5V23H9.8v-7c0-5.2 2-10.3 6.2-13.5z" fill="${PAPER}"/>
      <path d="M16 2.5c1.9 1.4 3.4 3.3 4.4 5.5h-8.8c1-2.2 2.5-4.1 4.4-5.5z" fill="${LAVENDER}"/>
      <circle cx="16" cy="13" r="2.9" fill="${SKY}" stroke="${STEEL}" stroke-width="1.3"/>
    </g>`,

  plug: `
    <path d="M12.5 4.5v6M19.5 4.5v6" stroke="${STEEL}" stroke-width="2.4" stroke-linecap="round"/>
    <rect x="9" y="10" width="14" height="10" rx="3" fill="${LAVENDER}"/>
    <path d="M13 13.5h6" stroke="${PAPER}" stroke-width="1.4" stroke-linecap="round" opacity=".7"/>
    <path d="M16 20v3.5c0 3-2.5 4.5-6.5 4.5" stroke="${AMBER}" stroke-width="2.6" stroke-linecap="round" fill="none"/>
    <path d="M25.5 6.5l1.2 2.4 2.4 1.2-2.4 1.2-1.2 2.4-1.2-2.4-2.4-1.2 2.4-1.2z" fill="${MINT}"/>`,

  hourglass: `
    <rect x="7" y="2.5" width="18" height="3" rx="1.5" fill="${STEEL}"/>
    <rect x="7" y="26.5" width="18" height="3" rx="1.5" fill="${STEEL}"/>
    <path d="M9.5 5.5h13c0 5-3.7 7.6-5.2 10.5 1.5 2.9 5.2 5.5 5.2 10.5h-13c0-5 3.7-7.6 5.2-10.5C13.2 13.1 9.5 10.5 9.5 5.5z" fill="${PAPER}" stroke="${STEEL}" stroke-width="1.2"/>
    <path d="M11.6 8h8.8c-.7 2.4-2.7 4-4.4 5.6-1.7-1.6-3.7-3.2-4.4-5.6z" fill="${AMBER}"/>
    <path d="M16 15.5v6" stroke="${AMBER}" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M11 25c1-2.6 3-3.8 5-3.8s4 1.2 5 3.8z" fill="${AMBER}"/>`,

  thinking: `
    <circle cx="16" cy="15" r="13" fill="${AMBER}"/>
    <ellipse cx="11.5" cy="12.5" rx="1.6" ry="2.1" fill="${INK}"/>
    <ellipse cx="20.5" cy="11.5" rx="1.6" ry="2.1" fill="${INK}"/>
    <path d="M18.4 7.6c1.5-1 3.2-1 4.5 0" stroke="${INK}" stroke-width="1.4" stroke-linecap="round" fill="none"/>
    <path d="M12.5 20.6l6.5-1.2" stroke="${INK}" stroke-width="1.7" stroke-linecap="round"/>
    <path d="M6.5 28.5c-.6-2.6.6-4.6 2.8-5.4l4-1.4a1.9 1.9 0 0 1 1.3 3.6l-2 .7c1.2.4 1.8 1.4 1.6 2.5z" fill="${AMBER_DARK}"/>`,

  puzzle: `
    <path d="M6 10h6a3 3 0 1 1 6 0h6v6a3 3 0 1 1 0 6v6H6v-6a3 3 0 1 0 0-6z" fill="${LAVENDER}"/>
    <path d="M9 13.5h4" stroke="${PAPER}" stroke-width="1.4" stroke-linecap="round" opacity=".7"/>`,

  flask: `
    <rect x="11.5" y="2.5" width="9" height="2.4" rx="1.2" fill="${STEEL}"/>
    <path d="M13.2 4.9h5.6v5.6l6.4 13.2a3.2 3.2 0 0 1-2.9 4.6H9.7a3.2 3.2 0 0 1-2.9-4.6l6.4-13.2z" fill="${PAPER}" stroke="${STEEL}" stroke-width="1.3"/>
    <path d="M9.6 19.5h12.8l2.3 4.7a1.9 1.9 0 0 1-1.7 2.8H9a1.9 1.9 0 0 1-1.7-2.8z" fill="${MINT}"/>
    <circle cx="14" cy="23" r="1.3" fill="${PAPER}"/>
    <circle cx="18.6" cy="24.6" r="1" fill="${PAPER}"/>
    <circle cx="17.5" cy="16.5" r="1" fill="${MINT}"/>`,

  check: `
    <circle cx="16" cy="16" r="14" fill="${MINT}"/>
    <path d="M9.5 16.5l4.4 4.4 8.6-9.2" stroke="${PAPER}" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>`,

  snail: `
    <path d="M3 26.5c0-2 1.4-3.3 3.4-3.3h17.4c2.4 0 4.3-1 5.4-2.8.6 3.6-1.7 6.1-5.4 6.1z" fill="${AMBER_LIGHT}"/>
    <circle cx="6.5" cy="21.5" r="3" fill="${AMBER_LIGHT}"/>
    <path d="M5.8 19 4.6 14M7.6 19l1.3-4.8" stroke="${AMBER_DARK}" stroke-width="1.3" stroke-linecap="round"/>
    <circle cx="4.5" cy="13.7" r="1.1" fill="${INK}"/>
    <circle cx="9" cy="13.9" r="1.1" fill="${INK}"/>
    <circle cx="18" cy="16" r="8" fill="${LAVENDER}"/>
    <path d="M18 12.2a3.8 3.8 0 1 1-3.8 3.8 2.5 2.5 0 0 1 2.5-2.5 1.3 1.3 0 0 1 1.3 1.3" stroke="${LAVENDER_DEEP}" stroke-width="1.6" stroke-linecap="round" fill="none"/>`,
} as const;

export type EmojiName = keyof typeof emojiIcons;
