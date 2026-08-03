# Blog design specification

Analysis date: 2026-08-04  
Inputs: [reference design report](../reference-design-report.md), [current design-system report](./current-design-system.md), and the Astro source tree.

This is a design specification only. It does not implement the blog system.

## 1. Recommended blog visual direction

Build the blog as a dark, technical editorial reading surface: focused, spacious, and precise. Keep the portfolio's near-black navy canvas, amber action language, green code/status language, Space Grotesk display type, Inter prose, JetBrains Mono metadata/code, thin borders, restrained radii, and existing navigation personality.

Use the reference article's content-first structure as the information architecture: compact article header, centered readable prose column, strong title hierarchy, generous section rhythm, localized horizontal scrolling for code and tables, and framed media. The result should feel like Syed's engineering notebook rather than a themed copy of the reference site.

The blog should have two distinct density levels:

- Listing pages can use the existing `1100px` site container and card rhythm so the blog still belongs to the portfolio.
- Article pages should narrow the actual prose to `720px` (roughly 65–75 characters per line), matching the reference's reading width and improving comprehension.

Avoid adding decorative gradients, glass panels, large hero illustrations, or a new light palette. The subject matter and code should provide the visual interest.

## Existing palette audit

### Primary

- Amber `#f6a823` (`--primary`): actions, focus, emphasis, bullets, active states, and current brand marker.

### Secondary

- Green `#47d1a3` (`--code-string`): code strings, status indicators, and technical success/active accents.

### Existing accent/support colors

- Blue `#85b3e0` (`--code-property`): existing syntax/property accent; suitable for informational category differentiation.
- Cool foreground `#e0e6eb` (`--foreground`): primary text and headings.
- Muted gray-blue `#6c7c93` (`--muted-foreground`): supporting copy and navigation.
- Pill foreground `#c2ccd6` (`--pill-foreground`): compact text on dark tags/surfaces.
- Page background `#0a0b0f`, card `#111318`, code background `#0e1015`, border `#1e2129`, code border `#23262f`, pill background `#1a1c23`.

## Blog identity colors: maximum three

Use only these three chromatic colors for blog identity:

1. **Amber `#f6a823`** — primary editorial/action accent.
2. **Green `#47d1a3`** — technical/code/status accent.
3. **Blue `#85b3e0`** — informational/category accent, limited to labels and syntax-like metadata.

All other colors remain existing neutral surfaces and text tokens. Do not introduce a new pink, purple, red, or white accent.

### Exact usage map

| Element | Recommended color and treatment |
|---|---|
| Article links | Amber text with a 1px underline; underline offset `3px`. Use amber on page background or card surfaces. |
| Link hover | Keep amber and increase underline thickness to `2px`; do not switch to a new hue. For navigation links, retain foreground on hover as on the portfolio. |
| Article headings | Existing foreground `#e0e6eb`, never a chromatic accent. Use amber only for small section markers or linked headings when useful. |
| Blog tags | Pill background `#1a1c23`, pill foreground `#c2ccd6`, pill border `#272a35`. Optional tag variants use amber, green, or blue text with a low-opacity matching border/background. |
| Category labels | Use blue for informational categories, green for frontend/code categories, amber for migration/shipping categories. Pair color with text so color is never the only distinction. |
| Featured articles | Amber top rule or small amber featured marker; preserve card surface and border. Avoid full amber card fills. |
| Article cards | Card `#111318`, border `#1e2129`; title foreground; excerpt should use `#c2ccd6` on cards rather than muted gray-blue. |
| Blockquote borders | Amber `2px` left border. Quote text remains `#c2ccd6` or foreground, not amber. |
| Inline code | Amber text on code background `#0e1015`, with existing code border only when needed. Use compact padding and a subtle radius. |
| Code-block accents | Code background `#0e1015`; left accent border amber for the primary example, green for output/status examples, blue for type/property emphasis. Syntax colors may continue using the existing generated code theme. |
| Highlighted text | Use amber only for short, intentional emphasis; use a low-opacity amber background with foreground text when highlighting a phrase. Never highlight whole paragraphs. |
| Focus rings | Existing amber `2px` outline with `3px` offset. Keep it visible on background, card, and code surfaces. |
| Calls to action | Existing amber button with page-background foreground. Secondary CTA retains transparent background, foreground text, and border. |

## Contrast verification

Ratios below are calculated from the normalized values in the existing design system. WCAG AA target is `4.5:1` for normal text and `3:1` for large text or non-text focus indicators.

| Pair | Ratio | Result / rule |
|---|---:|---|
| Body text `#e0e6eb` on page background `#0a0b0f` | 15.63:1 | Passes AAA; use for prose and headings. |
| Muted text `#6c7c93` on page background `#0a0b0f` | 4.63:1 | Passes AA narrowly; use at `16px+` for important supporting copy. |
| Muted text `#6c7c93` on card `#111318` | 4.37:1 | Fails AA for normal text; use `#c2ccd6` or foreground for card excerpts/metadata. |
| Amber links `#f6a823` on page background | 9.88:1 | Passes AAA; underline remains required for inline link clarity. |
| Amber on card background | 9.33:1 | Passes AAA; suitable for links and markers. |
| Code text `#e0e6eb` on code background `#0e1015` | 15.12:1 | Passes AAA. |
| Tag text `#c2ccd6` on pill background `#1a1c23` | 10.45:1 | Passes AAA. |
| Green `#47d1a3` on page background | 10.23:1 | Passes AAA; use for technical/status accents. |
| Blue `#85b3e0` on page background | 8.92:1 | Passes AAA; use for category labels and property-like accents. |
| Amber focus indicator against page background | 9.88:1 | Clearly visible; retain `2px` outline and `3px` offset. |

Do not use the existing code comment color `#4c5767` for required prose, labels, instructions, or interactive states; its contrast is approximately `2.60:1` on the code background.

## 2. Blog color system

| Semantic role | Existing token/value | Blog meaning |
|---|---|---|
| `blog-bg` | `--background` / `#0a0b0f` | Article and listing canvas. |
| `blog-surface` | `--card` / `#111318` | Cards, related articles, and featured surfaces. |
| `blog-surface-subtle` | `--secondary` / `#1a1c23` | Tags, table headers, and compact metadata surfaces. |
| `blog-text` | `--foreground` / `#e0e6eb` | Body text, headings, table cells when high emphasis is needed. |
| `blog-text-muted` | `--muted-foreground` / `#6c7c93` | Navigation and low-priority metadata on the page background only. |
| `blog-text-on-surface` | `--pill-foreground` / `#c2ccd6` | Card excerpts, quotes, and metadata on elevated surfaces. |
| `blog-border` | `--border` / `#1e2129` | Card edges, dividers, and structural rules. |
| `blog-border-strong` | `--code-border` / `#23262f` | Code/media/table boundaries. |
| `blog-accent` | `--primary` / `#f6a823` | Links, CTA, focus, featured marker, blockquote rule. |
| `blog-accent-code` | `--code-string` / `#47d1a3` | Code/output/status accent. |
| `blog-accent-info` | `--code-property` / `#85b3e0` | Category and property/type accent. |
| `blog-code-bg` | `--code-bg` / `#0e1015` | Inline and block code surface. |

## 3. Semantic CSS tokens

Add blog-specific aliases rather than scattering raw values through article components. Keep them backed by existing global tokens:

```css
:root {
  --blog-bg: hsl(var(--background));
  --blog-surface: hsl(var(--card));
  --blog-surface-subtle: hsl(var(--secondary));
  --blog-text: hsl(var(--foreground));
  --blog-text-muted: hsl(var(--muted-foreground));
  --blog-text-on-surface: hsl(var(--pill-foreground));
  --blog-border: hsl(var(--border));
  --blog-border-strong: hsl(var(--code-border));
  --blog-accent: hsl(var(--primary));
  --blog-accent-code: hsl(var(--code-string));
  --blog-accent-info: hsl(var(--code-property));
  --blog-code-bg: hsl(var(--code-bg));
  --blog-prose-width: 45rem; /* 720px */
  --blog-list-width: 68.75rem; /* 1100px */
  --blog-gutter: 1rem;
}
```

Use these additional non-color semantic hooks in components: `blog-prose`, `blog-prose-header`, `blog-meta`, `blog-tag`, `blog-card`, `blog-code`, `blog-table-wrap`, `blog-figure`, `blog-quote`, and `blog-divider`.

## 4. Article-page specification

Structure:

1. Keep the portfolio navigation behavior and branding; on article routes, use the same sticky/scrolled nav with a compact `Blog` or `← Blog` route affordance.
2. Center a `720px` article column inside a fluid outer wrapper.
3. Article header: category label, title, dek/description, author/date/reading-time metadata, then optional hero image.
4. Article body: prose headings, paragraphs, lists, links, code, tables, images, blockquotes, and dividers.
5. End with tags, previous/next article navigation, related articles, and a single clear CTA back to the portfolio or contact section.

The article title should be the visual anchor without becoming a giant portfolio hero. Use a maximum width of about `18–22ch`, then let the dek span the prose width. Keep metadata in JetBrains Mono at `12–13px` with adequate contrast.

## 5. Blog-listing-page specification

Use the existing `/blog` route as the home for the writing index. Keep the current page's `Blog` heading and personality, but replace the "Launching soon"-only state with a real archive-ready layout.

- Outer wrapper: existing `1100px` container, `24px` mobile gutters.
- Intro: title, one-sentence description, optional amber status/featured marker.
- Featured article: one prominent card with title, excerpt, category, date, reading time, and optional image; amber marker only.
- Archive: stacked cards on desktop and mobile rather than a dense multi-column grid. Each card should have a clear title link, two-line excerpt, tags/category, and metadata.
- Optional filters: simple text links or compact tags; preserve a visible selected state using amber plus text, not color alone.
- Empty state: use the existing content voice and one secondary CTA; never present a decorative empty panel as the primary experience.

Cards should have `24px` desktop padding and `20px` mobile padding, `6px` radius, `16px` vertical separation, and hover feedback through border-color/background shift rather than lift or shadow.

## 6. Desktop and mobile typography

| Element | Desktop | Mobile |
|---|---|---|
| Article title | Space Grotesk 48px/1.1, weight 700, `-0.02em` | Space Grotesk 34–36px/1.12, weight 700; natural wrapping at 390px |
| Article dek | Inter 18px/1.55 | Inter 17px/1.55 |
| Body prose | Inter 16px/28px, weight 400 | Inter 16px/26px; preserve 16px at narrow widths |
| Section `h2` | Space Grotesk 28px/1.2, weight 700 | 24px/1.25 |
| Section `h3` | Space Grotesk 21px/1.3, weight 600 | 19px/1.35 |
| Metadata | JetBrains Mono 12px/18px | JetBrains Mono 11px/17px, wrapping allowed |
| Inline code | JetBrains Mono `0.78em` | Same relative scale; never below 12px rendered size |
| Listing title | Space Grotesk 22px/1.25 | 20px/1.3 |

Use `font-display: swap` through the existing font loading strategy and provide the current families as fallbacks. Keep headings foreground-colored and avoid using all-caps for article titles.

## 7. Content widths and spacing

- Article prose: `max-width: 720px`; outer width `min(100%, calc(720px + 32px))`.
- Article mobile gutter: `16px`; desktop outer article padding: `16px`.
- Listing width: existing `1100px` cap.
- Paragraph spacing: `0 0 20px`; body line-height `28px` desktop and `26px` mobile.
- Article header to body: `48px` desktop, `36px` mobile.
- Section heading top margin: `40px` desktop, `32px` mobile; bottom margin `12px`.
- Dividers: `56px` vertical margin desktop, `40px` mobile.
- Lists: `40px` left padding desktop, `24px` mobile; `8px` item gaps.
- Main article padding: `48px 16px 80px` desktop; `24px 16px 48px` mobile.
- Cards: `24px`/`20px` padding; `16px` stack gap.

At no breakpoint should the page itself become horizontally scrollable. Localize overflow to code and table wrappers.

## 8. Code, table, image, and blockquote styles

### Code blocks

- `pre` background `--blog-code-bg`, `1px solid --blog-border-strong`, `2px` left accent border, `8px` radius.
- `14px` padding; `16px/1.5` line-height for comfortable reading rather than the reference's very small rendered code.
- `overflow-x: auto`, `max-width: 100%`, and preserve whitespace.
- Use a small filename/language header only when it adds context; header text is `12px` JetBrains Mono.
- Retain existing syntax theme colors where generated by Astro, but map important brand accents to amber/green/blue.

### Inline code

Use JetBrains Mono at `0.78em`, amber text, code background, `2px 6px` padding, and `4px` radius. It should remain visually compact and never be used for long prose fragments.

### Tables

- Wrap in `.blog-table-wrap` with `overflow-x: auto` on narrow screens.
- Table width `100%`, `border-collapse: collapse`, and `8px` cell padding.
- Header background `--blog-surface-subtle`, header text foreground, body text `--blog-text`.
- Use `1px` `--blog-border-strong` rules; do not cardify or hide columns on mobile.
- Add a caption when the table's purpose is not obvious from surrounding text.

### Images

- `max-width: 100%`, `height: auto`, `1px` border, `12px` radius.
- Use `loading="lazy"` for below-the-fold media and reserve dimensions to avoid layout shift.
- Keep treatment clean: no persistent drop shadow, no color overlay, and no decorative frame beyond the existing border/surface language.
- Always provide meaningful `alt` text; use an empty alt only for genuinely decorative images.

### Blockquotes

- `2px` solid `--blog-accent` left rule, `20px` left padding, `8px` vertical padding, `24px` vertical margins.
- Text uses `--blog-text-on-surface` and italic only when semantically appropriate.
- Do not make the entire quote amber; the border is the identity cue.

## 9. Recommended Astro component structure

Use content collections for typed Markdown/MDX articles, with trusted rendered content and explicit metadata. Keep article content out of a large page component.

```text
src/
  content.config.ts
  content/
    blog/
      jsp-auth-migration.md
  layouts/
    BaseLayout.astro
    BlogLayout.astro
  components/blog/
    BlogHeader.astro
    BlogCard.astro
    BlogTag.astro
    BlogMeta.astro
    BlogProse.astro
    CodeBlock.astro
    TableWrap.astro
    ArticleFigure.astro
    Blockquote.astro
    RelatedArticles.astro
    ArticleNav.astro
  pages/
    blog/
      index.astro
      [...slug].astro
```

`BlogLayout.astro` should own the article shell, header slot, prose slot, and footer navigation. `BlogProse.astro` should provide selectors for Markdown elements without replacing semantic HTML. `CodeBlock` should accept trusted, generated code content only; do not pass unsanitized user input to `set:html`.

## 10. Differences from the reference site

- Preserve the portfolio's navy-black background instead of switching to pure black.
- Use amber as the primary link/action/focus accent instead of the reference's pink.
- Add green and blue only as existing technical/category accents; the reference's syntax palette is not the blog brand palette.
- Keep Space Grotesk headings from the portfolio; use the reference's restrained editorial scale rather than copying its Inter-only heading treatment.
- Keep the existing sticky portfolio navigation and `1100px` listing container.
- Keep the reference's `720px` article reading measure, 16px mobile gutters, spacious section rhythm, localized code overflow, full-width tables, and framed media.
- Increase rendered code text from the reference's approximately `11px` to `16px/1.5` for accessibility and comfortable technical reading.
- Use the existing card, pill, border, and focus primitives so the blog feels native to the rest of the site.

## 11. Elements that should not be copied

- The reference's pink accent or any new pink/purple brand color.
- Pure-black canvas, if it reduces continuity with the portfolio's navy-black background.
- The reference's exact title wording, article copy, metadata, navigation labels, or content structure beyond general hierarchy.
- Tiny `11.2px` code text as the default for long code examples.
- Full-width article cards or prose wider than roughly 75 characters per line.
- Hover-only affordances, color-only category meaning, or hidden keyboard focus.
- Tables converted into inaccessible mobile cards or the entire document allowed to overflow horizontally.
- Decorative gradients, heavy shadows, glassmorphism, oversized hero art, or a new editorial logo treatment.
- Emoji as UI icons; continue using the site's current-color SVG/Lucide approach.
