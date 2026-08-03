# Current design system

Analysis date: 2026-08-04

Scope: the public homepage at [syedahamed.in](https://www.syedahamed.in/) and the local Astro source. The repository is the authoritative source when the two differ. The live page was inspected with Chrome DevTools at 1440px and 390px widths. The requested extractor package could not run because its Playwright Chromium download was unavailable; the same extraction was completed from DevTools computed styles, loaded stylesheets, runtime CSS variables, and the source tree.

## Summary

The site is a dark, developer-oriented portfolio with a near-black navy background, warm amber primary action color, cool blue-gray text, green syntax/code accent, Space Grotesk headings, Inter body text, and JetBrains Mono code/UI metadata. The live homepage and repository agree on the core system. Differences are mostly browser serialization of alpha colors and generated Tailwind/Astro syntax-highlight styles.

## 1. Brand colors

The brand system is intentionally small: amber for actions and emphasis, with green reserved for code/status accents.

| Role | Exact normalized value | Source token | Files / appearances | Importance and intent | Accessibility |
|---|---|---|---|---|---|
| Primary amber | `#f6a823` / `rgb(246 168 35)` / `hsl(38 92% 55%)` | `--primary` | `src/styles/global.css:35,44,80,103`; buttons, focus rings, bullets, icons, status dots, hover borders across portfolio components | High-frequency intentional brand/action color; source reference count 8 | `#0a0b0f` on amber is about 9.88:1; strong. Amber text on dark is also strong. |
| Primary foreground | `#0a0b0f` / `hsl(225 20% 5%)` | `--primary-foreground` | `src/styles/global.css:36,104`; primary buttons | Intentional button label color; same as page background | About 9.88:1 against amber; strong. |
| Code keyword / amber alias | `#f6a823` | `--code-keyword` | `src/styles/global.css:44`; exposed through `@theme`, not directly referenced by component markup | Intentional alias for syntax highlighting, but likely redundant with the generated `one-dark-pro` output | Same as primary. |
| Code string / green | `#47d1a3` / `rgb(71 209 163)` / `hsl(160 60% 55%)` | `--code-string` | `src/styles/global.css:45`; hero status pill and code-card dot; `Hero.astro`, `CodeCard.astro` | Intentional secondary brand accent for active/status/code content; source reference count 2 | About 9.89:1 against `#0e1015`; strong. |

## 2. Neutral colors

All neutral values are defined as HSL channels in `:root`; hex/RGB values below are normalized equivalents.

| Role | Exact normalized value | CSS variable | Files / current use | Frequency / intent | Accessibility or contrast concern |
|---|---|---|---|---|---|
| Page background | `#0a0b0f` / `rgb(10 11 15)` / `hsl(225 20% 5%)` | `--background` | `global.css:32,61,139,152`; body, transparent surfaces, scrolled nav, scrollbar track | Core background; 5 source token references | Excellent contrast base for foreground and primary text. |
| Foreground / headings | `#e0e6eb` / `rgb(224 230 235)` / `hsl(210 20% 90%)` | `--foreground` | `global.css:33,62,111,134`; all `text-foreground`, headings, button-secondary labels | High-importance primary text; 5 token references and dominant live text color | About 15.63:1 against page background; strong. |
| Card surface | `#111318` / `rgb(17 19 24)` / `hsl(225 18% 8%)` | `--card` | `global.css:34`; `bg-card` cards and alternating sections in `About.astro`, `Skills.astro`, `Experience.astro`, `blog.astro` | Intentional elevated surface; source token itself is lightly referenced because Tailwind utilities consume it | Safe as a surface; text should remain foreground/muted, not card-colored text. |
| Secondary / muted surface | `#1a1c23` / `rgb(26 28 35)` / `hsl(225 15% 12%)` | `--secondary`, `--muted` | `global.css:37-38,114`; button hover, status/icon containers, 404 background, pills | Intentional shared surface; both variables are exact duplicates | Fine as a surface. The duplicate tokens may be deliberate aliasing or a future consolidation candidate. |
| Muted text | `#6c7c93` / `rgb(108 124 147)` / `hsl(215 15% 50%)` | `--muted-foreground` | `global.css:39`; navigation, body supporting copy, metadata, footer, code filename | Very high live frequency; source token reference count 2, utility use is generated | About 4.63:1 against page background: passes WCAG AA for normal text narrowly, but is not suitable for smaller text on lighter surfaces or low-opacity backgrounds. |
| Pill foreground | `#c2ccd6` / `rgb(194 204 214)` / `hsl(210 20% 80%)` | `--pill-foreground` | `global.css:50,120`; `.pill` tech tags | Intentional compact-label text | About 8.78:1 against pill border and strong against pill background. |
| Pill background | `#1a1c23` | `--pill-bg` / `--color-pill` | `global.css:49,119`; `.pill` tags | Intentional compact surface; same color as secondary/muted | Fine as a surface. |
| Border | `#1e2129` / `rgb(30 33 41)` / `hsl(225 15% 14%)` | `--border` | `global.css:41,54,110,138,155`; global border default, nav, buttons, cards, scrollbar | High-importance structural neutral; source reference count 7 | Correctly used for non-text boundaries; low contrast is expected and should not carry meaning alone. |
| Pill border | `#272a35` / `rgb(39 42 53)` / `hsl(225 15% 18%)` | `--pill-border` | `global.css:51,117`; hero status and tech pills | Intentional subtle tag boundary | Good against pill foreground; subtle against the background by design. |
| Code background | `#0e1015` / `rgb(14 16 21)` / `hsl(225 20% 7%)` | `--code-bg` | `global.css:42`; `CodeCard.astro:11,33` | Intentional deepest surface for the code card; source reference count 3 | Strong for most syntax colors. |
| Code border | `#23262f` / `rgb(35 38 47)` / `hsl(225 15% 16%)` | `--code-border` | `global.css:43`; code-card outer/header borders | Intentional subtle code-card boundary; source reference count 3 | Structural only; low contrast is acceptable. |
| Code property | `#85b3e0` / `rgb(133 179 224)` / `hsl(210 60% 70%)` | `--code-property` | `global.css:46`; theme token exposed via `@theme` | Intentional syntax color, but no direct component reference found | About 8.63:1 against code background. |
| Code bracket | `#627084` / `rgb(98 112 132)` / `hsl(215 15% 45%)` | `--code-bracket` | `global.css:47`; theme token only | Intentional syntax color; no direct component reference found | Should remain non-semantic syntax support; contrast is lower than body text. |
| Code comment | `#4c5767` / `rgb(76 87 103)` / `hsl(215 15% 35%)` | `--code-comment` | `global.css:48`; `CodeCard.astro:53` line numbers | Intentional low-emphasis code metadata; source reference count 3 | About 2.60:1 against code background; below WCAG AA. Appropriate only for non-essential decorative/comment text, not instructions or required content. |

### Semantic colors

| Role | Exact value | Token / use | Assessment |
|---|---|---|---|
| Destructive | `#ef4444` / `rgb(239 68 68)` / `hsl(0 84.2% 60.2%)` | `--destructive`, used as the translucent red code-window dot in `CodeCard.astro` | Intentional semantic token, but currently decorative rather than an error message. At `/60` opacity it is not a reliable semantic signal by itself. |
| Focus | Amber `#f6a823` with 2px outline and 3px offset | `global.css:78-81` | Intentional and visible focus treatment. |
| Link / hover | Foreground `#e0e6eb`; muted links start at `#6c7c93` and transition to foreground | Tailwind utility classes in `Navbar.astro`, `Hero.astro`, `Contact.astro`, `blog.astro`, `404.astro`; button hover rules in `global.css:106-115` | Intentional. Primary button hover is opacity `0.9`; secondary hover uses `--secondary`. |

### Runtime-only syntax colors

The deployed code card also contains generated `one-dark-pro` colors not declared as local design tokens: approximately `#abb2bf` base code text, `#c678dd` keyword-like purple, `#e5c07b` yellow, `#56b6c2` cyan, `#e06c75` red, and `#98c379` green. These come from Astro's code theme output rather than the explicit token layer. They are intentional for code syntax, but are a separate palette that should not be mistaken for the site brand palette.

## 3. Typography

| Category | Value | Evidence / use |
|---|---|---|
| Body family | `Inter, sans-serif` | `BaseLayout.astro:41-43` imports weights 300/400/500/600; `global.css:4,63`; live computed body family matches. |
| Display family | `Space Grotesk, sans-serif` | `BaseLayout.astro:42`; `global.css:5,65-71`; all headings and display/logo classes. |
| Monospace family | `JetBrains Mono, monospace` | `BaseLayout.astro:42`; `global.css:6,73-76,121`; code card, pills, dates, footer metadata. |
| Body default | `16px / 24px` (`1.5`) | Live computed body; Tailwind `text-base`. |
| Supporting large copy | `18px / 28px` or `18px / 29.25px` | Hero/About/Contact `text-lg`; `leading-relaxed` gives 1.625 line-height in the live page. |
| H1 | `36/40` mobile, `48/48` at `sm`, `60/60` at `lg`; weight 700 | `Hero.astro:25`; live desktop computed `60px / 60px`. |
| H2 | `30/36` base, `36/40` at `lg`; weight 700 | Portfolio section headings; `About.astro`, `Experience.astro`, `Skills.astro`, `Contact.astro`. |
| H3 | `16/24` or `20/28` at `lg`; weight 600 | Skill labels and experience titles. |
| Small metadata | `12/16` and `14/20` | Footer, code filename, experience dates, line numbers. |
| Tracking | Display logo/H1 use tight tracking; logo is `-0.6px`, H1 desktop is `-1.5px` live | `Navbar.astro:20`; `Hero.astro:25`. |

No inline `style=` attributes, JavaScript style constants, or alternate font imports were found in `src`. There is no local dark/light font variant.

## 4. Spacing and layout

- The underlying rhythm is Tailwind's 4px spacing scale: common values are `4px`, `6px`, `8px`, `10px`, `12px`, `16px`, `20px`, `24px`, `32px`, `40px`, `48px`, `64px`, `80px`, `112px`, and `128px`.
- `.section-padding` is `80px 24px` by default, `112px` vertical at `min-width: 768px`, and `128px` vertical at `min-width: 1024px` (`global.css:83-88,178-188`). The live mobile inspection measured `80px 24px`.
- `.container-narrow` is `width: min(100%, 1100px)` with auto inline margins (`global.css:86-89`). This is the primary content width.
- The navbar is `64px` high (`h-16`). Desktop nav gaps include `36px` between links and `32px` in the social/action group.
- Major layout gaps: hero grid `48px`, then `64px` at `lg`; section/card stacks commonly `16px`, `24px`, `32px`, and `40px`.
- Content measure uses `max-w-lg` (~512px), `max-w-xl` (~576px), and `max-w-2xl` (~672px) for readable copy.
- The homepage contains no inline layout styles. Layout values are split between `global.css` and Tailwind utility classes in the Astro components.

## 5. Borders, radii and shadows

| Primitive | Value | Use |
|---|---|---|
| Standard button/card radius | `6px` (`0.375rem`, `rounded-lg`) | Buttons, experience/blog cards, code card. |
| Pill radius | `4px` (`0.25rem`) | Tech tags and status pill base `.pill`. |
| Status badge radius | Full pill (`rounded-full`) | Hero status and blog “Launching soon” badge. |
| Image radius | `16px` (`rounded-2xl`) | About image frame. |
| Scrollbar thumb radius | `3px` | `global.css:154-156`. |
| Card shadow | Tailwind `shadow-lg` on About image | Intentional image elevation; exact generated shadow is framework output. |
| Code glow | `0 0 20px -5px hsl(var(--primary) / 0.15)` | `.glow-sm`, code card only. |
| Nav surface | `backdrop-filter: blur(12px)` and `background: hsl(var(--background) / 0.8)` when scrolled | Intentional translucent sticky navigation. |
| Image overlay | `from-black/10 via-transparent to-transparent` | Intentional subtle photo treatment in `About.astro`. |

No broad or accidental inline shadows were found. Border color is globally applied to `*`, which is a deliberate utility-friendly default but means generated components inherit the token unless they override it.

## 6. Responsive behaviour

| Breakpoint / condition | Behaviour |
|---|---|
| Base / under `640px` | Single-column layout; 24px horizontal section padding; mobile menu toggle; code card hidden; hero H1 `36px`; experience header stacks. |
| `sm` = `640px` (Tailwind utilities) | Hero H1 becomes `48px`; experience logo sizes increase; footer changes to row layout; skills become two columns. |
| `md` = `768px` | Desktop nav appears and mobile menu is hidden; section vertical padding becomes `112px`; About switches to a row layout; skills remain two columns. Explicit media queries occur in `global.css:178-183` and `Navbar.astro:193-197`. |
| `lg` = `1024px` | Section vertical padding becomes `128px`; hero becomes two columns with `64px` gap; code card appears; H1 becomes `60px`; section headings become `36px`; skills become three columns; content-side image can reach `400px`. |
| `prefers-reduced-motion: reduce` | Animations and transitions are reduced/disabled, smooth scrolling is disabled, and the About carousel does not start. Defined in `global.css:190-198` and component scripts/styles. |
| Dark mode | No `.dark` selector, `prefers-color-scheme` rule, or theme switch was found. Dark tokens are the default and only palette. The live page remained dark when emulated with Chrome DevTools. |

## 7. Repository vs deployed website

### Matches

- Live computed variables exactly match the repository's root HSL values after normalization: body `#0a0b0f`, foreground `#e0e6eb`, card `#111318`, primary `#f6a823`, muted text `#6c7c93`, border `#1e2129`, code background `#0e1015`, and code string `#47d1a3`.
- Live typography matches the repository imports: Inter body, Space Grotesk headings, and JetBrains Mono code/metadata. The live page loaded Inter 400/500, Space Grotesk 600/700, and JetBrains Mono 400 in the DevTools session.
- Live desktop and mobile measurements match the source layout rules: 1100px content cap, 24px mobile gutters, 80px mobile section padding, 112px/128px desktop section padding, mobile menu below 768px, and code card visible only at `lg`.
- Live button, pill, code-card, image, and nav treatments match the source component classes and global CSS.

### Differences and likely legacy/generated styles

- Chrome serializes Tailwind alpha colors as `oklab(...)` in computed styles, while the repository expresses them as HSL variables plus slash opacity utilities such as `bg-card/50`, `bg-background/95`, `primary/20`, and `foreground/5`. This is a representation difference, not a visual token conflict.
- The deployed code card includes the generated `one-dark-pro` syntax palette listed above. Those exact colors are not in the repository's explicit token declarations and should be treated as Astro-generated/theme-owned styles.
- `--secondary` and `--muted` intentionally resolve to the same value today. They are semantically distinct names with no visual distinction; this can be retained for API clarity or consolidated later.
- `--code-property`, `--code-bracket`, and `--code-keyword` are exposed through `@theme` but have no direct component-level references found in `src`; they may be future token hooks or leftovers from an earlier syntax-token plan.
- `--color-pill` is mapped from `--pill-bg`, while component classes use `bg-secondary` or `pill-bg`/`pill-border` directly. The mapping is harmless but appears less central than the other generated color aliases.
- The repository contains `/blog` and `/404` routes and additional data such as case studies, while the inspected deployed homepage only exercises the portfolio route. These are route/content scope differences, not palette conflicts.

## Source inventory

- Global tokens, primitives, media queries, and animations: `src/styles/global.css`
- Font imports and document shell: `src/layouts/BaseLayout.astro`
- Homepage composition: `src/pages/index.astro`
- Responsive navigation and mobile menu: `src/components/portfolio/Navbar.astro`
- Brand/action usage: `Hero.astro`, `Contact.astro`, `Footer.astro`
- Surfaces/cards/image treatment: `About.astro`, `Experience.astro`, `Skills.astro`, `CodeCard.astro`, `blog.astro`, `404.astro`
- SVG strategy: `src/components/portfolio/BrandIcon.astro` uses `fill="none"`, `stroke="currentColor"`, and inherits the surrounding text color; Lucide icons follow the same current-color model.
- Content constants: `src/data/site.ts`; no design constants were found there.

