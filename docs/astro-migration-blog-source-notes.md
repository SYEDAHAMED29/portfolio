# Astro Migration and Blog-Building Journey

> Evidence-only working notes. This is not the final article. Claims ǎre labelled by evidence source: **confirmed by current code**, **confirmed by Git history**, **confirmed by Codex session history**, **confirmed by generated report**, **reported measurement**, **inference**, or **requires verification**.

## Central article thesis

The article should be a case study in using AI coding agents as an engineering workflow: repository analysis first, migration planning second, implementation third, browser-level correction fourth, and only then a content architecture and authoring system. The interesting result is not “Astro is better than React.” It is how Codex, Graphify, Astro Docs MCP, Chrome DevTools MCP, design skills, generated reports, prompts, and repeated validation were combined to preserve a real portfolio while moving most rendering to static HTML and adding a maintainable Markdown/MDX blog.

The central story is:

```text
understand the React codebase
→ build scoped repository context
→ plan the migration with current Astro guidance
→ convert reachable UI and preserve behavior
→ validate visually in a browser and correct typography/details
→ measure the architecture
→ research a reference blog and audit the portfolio design system
→ specify and implement Content Collections
→ add MDX only when reusable article blocks justify it
→ learn where prompts, skills, MCPs, and context became excessive
```

## What makes this story interesting

- **Confirmed by Git history:** this was a real repository transition, not a greenfield Astro demo. Commit `7f307b1` removed the React/Vite application surface and added Astro equivalents; later commits repaired icons, syntax highlighting, typography, and navigation.
- **Confirmed by current code:** the current site is Astro 7 with `.astro` pages/components, a static content collection, static paths, build-time rendering, and only small browser scripts for analytics/navigation.
- **Confirmed by Codex session history:** Graphify and source inspection were used to understand reachability; Astro Docs MCP was used for version-sensitive Astro/MDX decisions; Chrome DevTools MCP was used for visual, responsive, console, and reference-site inspection.
- **Confirmed by current code and generated reports:** the final blog uses one semantic `.blog-prose` system for ordinary Markdown and dedicated Astro components for special MDX blocks.
- **Confirmed by session history:** the workflow was not perfectly efficient. Long prompts, repeated audits, Graphify use after its useful scope had ended, and large single-session context increased cost.

## Project starting point

### Original React portfolio

- **Confirmed by Git history:** the starting project was a Vite React application named `vite_react_shadcn_ts` with `react`, `react-dom`, `react-router-dom`, `framer-motion`, `lucide-react`, `@posthog/react`, Radix UI packages, TanStack Query, Embla, Recharts, and a large shadcn-style UI surface.
- **Confirmed by Git history:** `src/main.tsx` mounted React with `createRoot`, wrapped the app with `PostHogProvider`, and `src/App.tsx` used `QueryClientProvider`, `TooltipProvider`, and `BrowserRouter`.
- **Confirmed by Git history:** the reachable home route rendered `Navbar`, `Hero`, `About`, `Experience`, `Skills`, `Contact`, and `Footer`. The older `Blog.tsx` existed as a commented route and was not the final blog architecture.
- **Confirmed by Git history:** analytics had already evolved from Google Analytics to PostHog before migration. The migration preserved click events and adapted the wrapper to static Astro markup.
- **Confirmed by Git history:** the original dependency graph contained many UI-library packages that were not needed by the reachable portfolio route. The migration removed React, ReactDOM, React Router, Framer Motion, React-specific PostHog integration, Radix/shadcn components, and other unused application dependencies.
- **Confirmed by current code:** the current route surface is `/`, `/blog`, `/blog/[slug]`, and a custom `404`; `/resume` is represented by the public resume asset/link rather than a React route. Exact pre-migration route count should be stated carefully because the original Blog route was commented and **requires verification**.

### What had to remain stable

- **Confirmed by migration prompt and current code:** content, assets, fonts, favicons, metadata, URLs, responsive behavior, navigation, analytics events, accessibility attributes, and the established dark portfolio visual language were explicit constraints.
- **Confirmed by current code:** `BaseLayout.astro` retains canonical URLs, description/author metadata, Open Graph/Twitter fields, favicons, manifest, Google font loading, and PostHog initialization.
- **Confirmed by current code:** `Navbar.astro` retains desktop navigation, external GitHub/LinkedIn/resume links, mobile menu behavior, focus semantics, and scroll-state behavior through a small inline script.

## Timeline of the work

| Approximate date           | Phase                                                     | Evidence                                                                                      |
| -------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 2026-08-02/03              | Repository-history and migration preparation              | Codex sessions `47cefff2…`, `5a30cdbe…`, `7bd4be52…`; session timestamps from local ctx index |
| 2026-08-03 01:02–01:53 IST | React-to-Astro implementation and immediate fixes         | Git commits `7f307b1`, `43c8d32`, `63b1b72`, `ce9b3c6`                                        |
| 2026-08-03 02:02–02:04 IST | Formatting/repository cleanup                             | Git commits `6571acb`, `35e8238`                                                              |
| 2026-08-04 00:18–00:34 IST | Reference-site and portfolio design extraction            | Codex session `91f82cc5…`; commit `1764125`                                                   |
| 2026-08-04 00:35 onward    | Blog foundation, MDX, reusable blocks, browser validation | Codex session `cd9054b3…`; commits `db96bcd`, `3c1ba91`; current working-tree additions       |

The dates above are **confirmed by Git history** for commits and **confirmed by ctx session metadata** for the listed historical sessions. The exact beginning/end of each agent task is not fully recoverable because ctx’s session rows have incomplete end timestamps.

## Phase 1: Understanding the React codebase

- **Confirmed by Codex session history:** the migration preparation explicitly began with repository inspection, existing documentation, Graphify output, installed skills, and Astro Docs MCP availability.
- **Confirmed by Codex session history:** proposed Graphify questions included the home-page rendering path, reachable components, React-only dependencies, interactions and analytics in `Navbar`, `Hero`, `About`, `Contact`, and `Footer`, use of `src/data/site.ts`, and reachability of `CaseStudies.tsx` and `Writing.tsx`.
- **Confirmed by generated Graphify/session report:** Graphify produced a structurally valid graph in the preparation pass, but a generic home-page query was noisy. The session explicitly recommended using specific component names for sharper queries.
- **Confirmed by source:** direct Git inspection verified the final deletion/conversion decisions before they were reflected in the Astro tree.
- **Not evidenced:** no separate repository-inspection product or Cursor transcript was found in the local ctx sources. Do not claim Cursor consumed Graphify output unless another source is located.

## Phase 2: Graphify and repository context

### What is verified

- **Confirmed by current repository and session history:** Graphify is installed under `.agents/skills/graphify/`, `graphify-out/graph.json` exists, and `AGENTS.md` requires query-first use for codebase questions.
- **Confirmed by session history:** Graphify was used for scoped queries before broad source browsing and was refreshed with `graphify update .` after migration/blog changes. The migration session reported a post-migration graph of 212 nodes, 194 edges, and 39 communities; a later blog session reported that update fail-closed because regenerated and existing graph node counts differed.
- **Confirmed by current repository rules:** `graphify update .` is intended to be AST-only and have no API cost.
- **Confirmed by Graphify skill instructions:** Graphify generates AST/semantic extraction artifacts, `graph.json`, reports, and optional visual/wiki outputs. The repository contains `graphify-out/` outputs, though only scoped query output was used in this evidence pass.

### What is not verified

- **Requires verification:** the exact initial generation command. The suggested `/graphify ./web --no-cluster` was not found as an actual executed command in the inspected sessions. The history contains the Graphify skill’s documentation for `--no-cluster`, but documentation is not proof of invocation.
- **Requires verification:** why `--no-cluster` was selected in the original run. A reasonable explanation is avoiding expensive clustering for a scoped code corpus, but this is an inference until the original command/event is found.
- **Requires verification:** whether a new Codex/Cursor session was required for generated rules to load. The preparation session discusses repository-scoped rules and installed skills, but no explicit “new session required” event was found.

### Net value

- **Confirmed by session history:** Graphify helped identify reachable components and dependency relationships and provided a migration map before deletion.
- **Confirmed by session history:** Graphify became noisy or unnecessary for leaf-component and styling work. The blog work eventually treated existing reports and source code as sufficient and explicitly warned against rerunning full design extraction when reports were available.
- **Inference:** Graphify’s highest-value window was architecture/reachability analysis before migration, not every subsequent CSS or MDX component task.

## Phase 3: Planning with Codex and Astro Docs MCP

- **Confirmed by session history:** the migration was scoped around preserving the existing experience while converting static UI to Astro and keeping only necessary client behavior.
- **Confirmed by repository history:** `.agents/skills/migrate/SKILL.md` and `.agents/skills/astro-best-practices/SKILL.md` were added with the migration commit and were available for Astro planning/implementation.
- **Confirmed by session history:** Astro Docs MCP was checked during preparation and later invoked for version-sensitive guidance. The session specifically recorded current guidance for migration, Tailwind integration, routing, and client behavior.
- **Confirmed by session history:** the implementation plan separated codebase understanding, architecture, implementation, compiler/type validation, browser validation, and Graphify refresh.
- **Requires verification:** the exact model, reasoning level, and original migration prompt metadata. Search did not find the requested `GPT-5.6 Terra High` label or the supplied migration token totals.

The most useful prompt shape was constraint-driven: preserve routes/content/assets/analytics/accessibility/responsive behavior, prefer Astro components and static HTML, retain only justified browser scripts, use current Astro APIs confirmed by Astro Docs MCP, validate with `astro check`, build, and Chrome DevTools. The prompt was effective because it defined the migration boundary and validation contract. It was excessive where it repeated full repository rules and demanded a broad final report inside the same long session.

## Phase 4: React-to-Astro implementation

### Concrete changes

- **Confirmed by Git history:** `src/main.tsx`, `src/App.tsx`, React page files, React portfolio components, React UI-library files, Vite/ESLint/Vitest configuration, and the old Tailwind configuration were removed or replaced.
- **Confirmed by Git history:** Astro equivalents were added for `Navbar`, `Hero`, `About`, `Experience`, `Skills`, `Contact`, `Footer`, `CodeCard`, `BrandIcon`, `BaseLayout`, `index`, and `404`.
- **Confirmed by current code:** the home page is composed directly from `.astro` components in `src/pages/index.astro`; no React island is used.
- **Confirmed by current code:** the only application JavaScript is small inline/browser code for navigation and analytics. No React, ReactDOM, React Router, Framer Motion, Radix, or React UI bundle is present in `package.json`.
- **Confirmed by current code:** `astro.config.mjs` uses Astro’s `defineConfig`, Tailwind’s Vite plugin, a site URL, and a temporary `VITE_PUBLIC_` compatibility prefix for existing PostHog variables.
- **Confirmed by current code:** analytics moved from a React provider to `initAnalytics()` plus delegated click handling in `BaseLayout.astro`; `src/lib/analytics.ts` retains PostHog events and page/url metadata.
- **Confirmed by current code:** `@lucide/astro` was restored after the first migration fix, and syntax highlighting was restored using Shiki’s `one-dark-pro` theme.

### Iterative corrections

- **Confirmed by Git history:** `43c8d32` restored Lucide icons and code-card syntax highlighting.
- **Confirmed by Git history:** `63b1b72` corrected the hero title line height and header transition/mobile navigation behavior.
- **Confirmed by session history:** browser inspection found visual differences that architecture checks alone did not catch. The migration work included manual/promp​​ted corrections to header font sizing, hero line height, icons, and code colors.

## Phase 5: Browser validation and visual corrections

- **Confirmed by Codex session history:** Chrome DevTools MCP was used after the build for screenshots, snapshots, responsive viewport checks, navigation behavior, console messages, network requests, and Lighthouse-related inspection.
- **Confirmed by Codex session history:** desktop, tablet, and mobile widths were checked; the migration session used responsive comparisons and recorded that navigation, anchor scrolling, resume links, external targets, mobile menu, focus states, images, `/blog`, and `404` were inspected.
- **Confirmed by session history:** final migration validation reported no application console errors and no failed first-party asset requests. The only 404 resource message was associated with intentionally visiting an unknown route.
- **Confirmed by session history:** `npm run lint`, `npm run test`, `npm run build`, and `npx astro check` were reported as passing in the migration session. Here `lint` and `test` both map to `astro check` in the current `package.json`, so they are not independent test suites.
- **Confirmed by session history:** the configured Lighthouse endpoint did not expose a Performance category, so no performance score was available from that tool.
- **Confirmed by Git history:** visual fixes landed after the migration commit, supporting the lesson that a correct static architecture does not guarantee visual parity.

### Chrome DevTools MCP versus Playwright

- **Confirmed by session history:** Chrome DevTools MCP was the browser-inspection tool actually used for this work.
- **Requires verification:** no Playwright execution was found in the inspected repository sessions. The practical distinction discussed was that DevTools MCP is useful for live DOM/CSS/console/network inspection and screenshots, while Playwright would be more appropriate for repeatable scripted regression tests. Do not claim Playwright was used.
- **Confirmed by session history:** the same DevTools workflow later inspected the Jaya Krishna reference article and the local GitHub source-link component at desktop/tablet/mobile sizes.

## Phase 6: Bundle and architecture results

| Measurement                     | Value                                                                  | Evidence classification                                                                                  |
| ------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Original React JavaScript       | 629 KB raw / 203 KB gzip                                               | **Reported measurement** in migration session; supporting build artifact was not found in the repository |
| Astro first-party client bundle | 169 KB raw / 56 KB gzip                                                | **Reported measurement** in migration session; supporting build artifact was not found in the repository |
| Post-migration Graphify graph   | 212 nodes / 194 edges / 39 communities                                 | **Confirmed by Codex session history**                                                                   |
| Current Astro dependency set    | Astro, Tailwind Vite integration, Tailwind, PostHog, Lucide Astro, MDX | **Confirmed by current code**                                                                            |
| Static article generation       | `getStaticPaths()` plus collection entries rendered at build time      | **Confirmed by current code**                                                                            |

The 629/203 and 169/56 figures should not be presented as verified build output until the original command/output is recovered. They are plausible and repeatedly reported by the migration session, but remain session-reported measurements.

The requested token totals were not found in ctx search or the exported transcripts:

- `1,234,576` total / `1,141,507` input / `93,069` output / `36,293` reasoning / `32,744,448` cached input — **requires verification**.
- `579,949` total / `502,463` input / `77,486` output / `30,602,240` cached input — **requires verification**.

The supplied `GPT-5.6 Terra High` and `GPT-5.6 Luna Medium` labels likewise remain **requires verification**. The inspected local ctx index exposes provider/session IDs and transcripts, but not the requested model-usage accounting.

## Phase 7: Starting the blog

- **Confirmed by current code and Git history:** the first blog goal was a real listing/article system rather than the old placeholder `Blog.tsx`. The current implementation has a listing route, dynamic article route, shared article layout, metadata, tags, draft filtering, previous/next navigation, SEO fields, and typed content.
- **Confirmed by session history:** the process was influenced by Jaya Krishna’s blog, especially `https://jkrishna.dev/blog/mixed-imports-tree-shaking/`. That page was used as a reference for article structure and for the compact GitHub source-link pattern.
- **Confirmed by current code:** ordinary Markdown remains the default authoring format. MDX is enabled only because reusable article blocks became useful.
- **Confirmed by session history:** the first article began as `.md`, and the conversation initially considered MDX unnecessary. It was later converted to `.mdx` after reusable blocks were introduced. The current repository contains `moving-portfolio-from-react-to-astro.mdx` and a draft `mdx-authoring-example.mdx`.

## Phase 8: Discovering and installing skills

The repository’s `skills-lock.json` is the strongest current inventory. It records sources and hashes, not proof that every skill was used in every phase.

| Skill                      | Why selected                                                    | What it produced                                                     | Use status                                                                                  | Useful / overused                                                           |
| -------------------------- | --------------------------------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `graphify`                 | Map reachability and relationships before deletion              | `graphify-out/` graph, scoped queries, update results                | **Installed; invoked**                                                                      | Useful for architecture; later overhead for leaf work                       |
| `migrate`                  | Migration-specific Astro workflow                               | Migration guidance and constraints                                   | **Installed; available in migration session; exact invocation depth requires verification** | Useful early                                                                |
| `astro-best-practices`     | Astro implementation and maintainability defaults               | Guidance for static rendering, accessibility, scoped CSS, validation | **Installed; read/applied in migration/blog sessions**                                      | Useful when implementing; unnecessary to reread for every small edit        |
| `extract-design-system`    | Extract measured reference/deployed design tokens               | `reference-design-report.md`, `docs/current-design-system.md`        | **Installed; invoked**                                                                      | Useful for design research; rerunning after reports existed was unnecessary |
| `ui-ux-pro-max`            | Turn reference structure plus portfolio tokens into a blog spec | `docs/blog-design-spec.md` and token/layout decisions                | **Installed; queried/applied**                                                              | Useful at design-spec stage; overuse after the spec was settled             |
| `ctx-agent-history-search` | Search prior Codex sessions                                     | Historical evidence used in this document                            | **Installed in current work; invoked**                                                      | Useful for reconstruction                                                   |
| `technical-writing`        | Potential article/documentation guidance                        | No incorporated output identified                                    | **Installed in current tree; session history explicitly says it had not yet been used**     | Not evidenced as useful in the migration/blog implementation                |

No exact `npx skills add ...` installation command was found in the inspected transcripts. The sources recorded in `skills-lock.json` are:

```text
incluud/astro-agent-skills       → astro-best-practices, migrate
ctxrs/ctx                         → ctx-agent-history-search
arvindrk/extract-design-system   → extract-design-system
mindrally/skills                  → technical-writing
nextlevelbuilder/ui-ux-pro-max-skill → ui-ux-pro-max
```

This inventory is **confirmed by current repository files**. The distinction between installed, read, invoked, and incorporated is based on session evidence and is intentionally conservative.

## Phase 9: Extracting the reference design

- **Confirmed by Codex session history:** `extract-design-system` was used against `https://jkrishna.dev/blog/mixed-imports-tree-shaking/`.
- **Confirmed by generated report:** `reference-design-report.md` contains measurements/observations for page background and text, typography, headings, body size/line height, content width, spacing rhythm, links, code blocks, inline code, blockquotes, tables, dividers, images, and mobile behavior.
- **Confirmed by session history:** the extraction prompt asked for a structured report and explicitly requested Chrome DevTools MCP inspection; it was not a code-generation prompt.
- **Confirmed by session history:** the report described the reference site but did not automatically implement the portfolio’s blog. A later `ui-ux-pro-max` pass combined the report with the portfolio’s own design tokens.
- **Requires verification:** individual reference measurements should be checked against the report before quoting exact numbers in the article; this evidence pass did not reproduce the external inspection and did not use web research.

The important process lesson is that extraction produced evidence about another site, not a final design. The final system kept the reference’s content-first article structure while retaining the portfolio’s own typography, colors, surfaces, and navigation personality.

## Phase 10: Auditing the portfolio design system

- **Confirmed by generated report and current source:** the deployed portfolio was extracted and then reconciled against local source tokens. The report explicitly treated the repository as the final source of truth when deployed serialization differed.
- **Confirmed by current source/report:** amber `#f6a823` (`--primary`), green `#47d1a3` (`--code-string`), blue `#85b3e0` (`--code-property`), dark navy-black surfaces, `#e0e6eb` foreground, `#6c7c93` muted text, and related border/pill/code surfaces are documented.
- **Confirmed by current source/report:** typography is Space Grotesk for headings, Inter for body prose, and JetBrains Mono for code/metadata.
- **Confirmed by Git history:** `docs/current-design-system.md` was created in commit `1764125` as part of the design-spec work.

The methodology was deliberately two-pass: inspect deployed output for reality, then inspect local CSS/components for authority. This prevented browser-generated alpha values or generated syntax highlighting from being mistaken for source tokens.

## Phase 11: Producing the blog design specification

- **Confirmed by current file:** `docs/blog-design-spec.md` specifies a 720px article/prose width, an 1100px listing/site width, Space Grotesk headings, Inter prose, JetBrains Mono metadata/code, amber as the primary accent, green/blue as supporting technical accents, dark navy-black surfaces, stacked article cards, localized code/table scrolling, and no decorative gradients or glass effects.
- **Confirmed by session history:** `ui-ux-pro-max` was asked to combine the reference article structure with `docs/current-design-system.md`; the implementation prompt later instructed Codex to use the captured spec instead of rerunning design extraction.
- **Confirmed by current file:** the result intentionally distinguishes reference-derived information architecture from portfolio-specific visual identity. The reference contributed the centered editorial reading column, content hierarchy, spacing, framed media, and localized overflow behavior; the portfolio retained the existing palette, fonts, navigation, and dark surfaces.
- **Confirmed by current code:** the spec’s semantic tokens became `--blog-*` variables in `global.css`, and the current CSS implements the listed prose, code, table, image, and responsive behaviors.

## Phase 12: Implementing Astro Content Collections

- **Confirmed by Git history:** `db96bcd` added the collection, listing route, dynamic article route, `BlogLayout.astro`, `BlogCard.astro`, `BlogMeta.astro`, the first article, and blog CSS.
- **Confirmed by current code:** `src/content.config.ts` uses `defineCollection()`, `glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" })`, and a Zod schema with required title/description/date/category/tags plus optional updated date/image and default featured/draft flags.
- **Confirmed by current code:** `src/pages/blog/index.astro` uses `getCollection()`, filters drafts in production, sorts by publication date, calculates reading time, separates featured/archive posts, and renders `BlogCard`.
- **Confirmed by current code:** `src/pages/blog/[slug].astro` uses `getStaticPaths()`, `getCollection()`, `render(post)`, adjacent previous/next posts, and `<Content />` inside `BlogLayout`.
- **Confirmed by current code:** `BlogLayout.astro` owns article metadata/SEO, draft `noindex`, the article header, tags, image, `.blog-prose`, navigation, shared navbar, and footer.
- **Confirmed by current code:** Shiki is configured as `one-dark-pro` in `astro.config.mjs`; code/table overflow is localized in `.blog-prose`; drafts are visible in development and filtered in production.
- **Confirmed by current code:** `docs/blog-authoring.md` documents the authoring workflow and validation commands.
- **Confirmed by session history:** the first complete vertical slice was validated with type checking, lint/build commands, and browser inspection. The MDX phase later encountered a missing `@astrojs/mdx` installation in `node_modules`, causing the dev server to be unreachable until dependencies were reconciled.

## Phase 13: Markdown versus MDX

The decision evolved rather than being fixed at the start:

1. **Confirmed by session history:** plain Markdown was initially the simplest fit for posts containing prose, headings, lists, links, code, tables, quotes, and images.
2. **Confirmed by Git history/current files:** the first article began as `moving-portfolio-from-react-to-astro.md`.
3. **Confirmed by session history and authoring guide:** MDX was initially considered unnecessary and remained optional.
4. **Confirmed by session history/current files:** reusable callouts and GitHub source links created a real need for Astro components inside posts.
5. **Confirmed by current code:** `@astrojs/mdx` is configured with `mdx()`, the loader accepts both `.md` and `.mdx`, and both formats share the collection/schema/routes/layout/SEO/draft/Shiki behavior.

The resulting rule is practical: default to `.md`; use `.mdx` when importing an Astro component or using MDX-specific syntax. Both remain build-time content. No client-side framework is required for either format, and the custom blocks render as static Astro output.

## Phase 14: Reusable MDX blocks

- **Confirmed by current code:** `Callout.astro` is a reusable static block with `note`, `info`, `warning`, and `success` variants, optional title, semantic `<aside>`, accessible content structure, and scoped styling.
- **Confirmed by current code:** `GitHubSourceLink.astro` is a second reusable static block in `src/components/blog/blocks/`.
- **Confirmed by current code:** no speculative components such as copy buttons, interactive charts, search, RSS, or client-side article widgets were implemented.
- **Confirmed by authoring guide:** normal Markdown elements remain semantic HTML styled through `.blog-prose`; special blocks are Astro components used through MDX.

This is the core architectural distinction:

```text
standard Markdown
→ semantic HTML
→ .blog-prose CSS

special article block
→ Astro component
→ imported and used through MDX
→ static build-time HTML
```

## Phase 15: GitHubSourceLink case study

- **Confirmed by session history/current code:** the component was inspired by the compact GitHub file links on Jaya Krishna’s reference article.
- **Confirmed by session history:** Chrome DevTools MCP was used to inspect the reference DOM/CSS, responsive behavior, hover/focus states, and overflow characteristics before adapting the component to portfolio tokens.
- **Confirmed by current code:** the component accepts `href`, optional `path`, and optional `lineLabel`; parses GitHub `blob` paths and `#L1`/`#L1-L22` fragments; displays a safe fallback when parsing fails; opens external links in a new tab with `noopener noreferrer`; exposes an accessible label; and wraps long paths on small screens.
- **Confirmed by current code:** styling uses existing semantic blog tokens, JetBrains Mono, localized wrapping, amber hover/focus, and reduced-motion handling.
- **Confirmed by current code:** the development-only MDX example exercises a real source URL, single-line/range fragments, explicit overrides, malformed/minimal URLs, long paths, and placement before a related code block.

This is a genuine MDX use case because the source link is not merely a Markdown anchor: it derives structured display data and reusable interaction/accessibility behavior from one URL.

## Phase 16: Refactors and final organization

- **Confirmed by session history/current code:** blog CSS initially lived in `src/styles/global.css`, and a later question about a code snippet led to the explicit explanation that Markdown-generated code is styled by `.blog-prose`, not by the MDX file.
- **Confirmed by current code:** standard Markdown elements are not each wrapped in Astro components. `global.css` owns semantic selectors for paragraphs, headings, lists, links, code, preformatted blocks, blockquotes, tables, figures, and navigation.
- **Confirmed by current code:** special blocks live under `src/components/blog/blocks/`.
- **Confirmed by Git history:** `3c1ba91` added the authoring guide, MDX integration, `Callout.astro`, and the MDX example; the current working tree adds `GitHubSourceLink.astro` and extends the example/guide.
- **Requires verification:** whether blog-specific CSS was ever physically extracted from `global.css` into a separate stylesheet. Current code shows it remains in `global.css`, organized by blog token and selector sections.

## Phase 17: Prompting and token mistakes

This section should be honest in the final article.

- **Confirmed by session history:** prompts became very large and repeatedly restated settled repository context, tool requirements, and validation checklists.
- **Confirmed by session history:** Graphify was sometimes pushed beyond architecture/reachability work into leaf styling and component tasks where direct source inspection was faster.
- **Confirmed by session history:** design extraction and `ui-ux-pro-max` were intentionally not rerun during implementation once their reports/spec had been captured, which shows the correction but also indicates earlier pressure toward overlapping analyses.
- **Confirmed by session history:** the MDX/GitHubSourceLink prompt required many tools and audits for a relatively small component, including Astro Docs MCP, Chrome DevTools MCP, `ui-ux-pro-max`, existing reports, current source, tests, browser validation, authoring docs, and a broad file-organization review.
- **Confirmed by session history:** the final history-research request itself became a giant reporting prompt. That is useful as an evidence checklist but expensive as an implementation prompt.
- **Reported measurement, requires verification:** the supplied 579,949-token session total and 30,602,240 cached-input figure should be associated with the broad blog/design/MDX/refactor/browser-validation arc if confirmed; it should not be described as a one-component session.
- **Inference:** a better workflow would use shorter phase-specific prompts, compact handoff notes, fresh sessions after architecture decisions settle, and report references instead of asking the agent to reread every prior decision.

The key lesson is that tool availability is not free. MCP calls, repeated source audits, large cached prompts, and long sessions all carry context and latency costs even when the final code change is small.

## Final architecture

```text
src/pages/index.astro
  → BaseLayout.astro
  → static portfolio components
  → small inline navigation + analytics scripts

src/pages/blog/index.astro
  → getCollection("blog")
  → BlogCard + BlogMeta

src/pages/blog/[slug].astro
  → getStaticPaths()
  → render(post)
  → BlogLayout.astro
  → <Content />

src/content/blog/*.{md,mdx}
  → glob loader + Zod schema
  → Markdown semantic HTML / MDX Astro blocks
  → Shiki one-dark-pro at build time
```

**Confirmed by current code:** the system is static-first, typed, content-driven, and supports both Markdown and MDX without requiring a client framework. The portfolio and blog share `BaseLayout`, navigation, footer, fonts, analytics, tokens, and global CSS.

## Complete tool and skill inventory

| Tool/skill                 | Type                             | Phase used                                      | Purpose                                                                 | Concrete output                                               | Value                                        | Cost/limitation                                                            |
| -------------------------- | -------------------------------- | ----------------------------------------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------------------------------- |
| Codex                      | Agent surface                    | All                                             | Inspect, plan, edit, validate, synthesize                               | Source changes, prompts, reports, fixes                       | Integrated engineering workflow              | Long context and repeated prompts are costly                               |
| GPT-5.6 Terra High         | Model label                      | Migration, **requires verification**            | Reported planning/implementation model                                  | No local model metadata found                                 | Unknown                                      | Token/model accounting unavailable                                         |
| GPT-5.6 Luna Medium        | Model label                      | Blog work, **requires verification**            | Reported blog/design model                                              | No local model metadata found                                 | Unknown                                      | Token/model accounting unavailable                                         |
| Graphify                   | Repository-analysis tool/skill   | Architecture and refresh                        | Reachability/dependency graph                                           | `graphify-out/`, queries, update                              | High before deletion                         | Noisy for generic/leaf queries; update can fail-closed                     |
| Astro Docs MCP             | MCP/documentation source         | Migration and MDX                               | Verify current Astro APIs/integration behavior                          | Guidance for migration, MDX, collections, rendering           | High for version-sensitive choices           | Requires explicit invocation; not a substitute for source/build checks     |
| Chrome DevTools MCP        | MCP/browser inspection           | Migration and blog UI                           | DOM/CSS, screenshots, responsive, console/network, reference inspection | Browser evidence and corrections                              | High for visual parity                       | Live inspection is not a full regression suite                             |
| Playwright                 | Browser test tool                | **Not verified**                                | Potential scripted regression alternative                               | No local execution found                                      | Not assessed                                 | Do not claim it was used                                                   |
| skills.sh                  | Skill registry/source            | Installation context, **requires verification** | Source of installable skills                                            | `skills-lock.json` sources are present                        | Helped create reproducible skill inventory   | Exact CLI invocation not found                                             |
| `extract-design-system`    | Design-analysis skill            | Reference and deployed design                   | Extract measured tokens and layout observations                         | `reference-design-report.md`, `docs/current-design-system.md` | High at research stage                       | Rerunning after reports exist is redundant                                 |
| `ui-ux-pro-max`            | Design reasoning skill/database  | Blog design and component design                | Combine reference structure with portfolio system                       | `docs/blog-design-spec.md`, token decisions                   | High at specification stage                  | Overkill for settled CSS/leaf work                                         |
| `astro-best-practices`     | Coding skill                     | Migration/blog/MDX                              | Astro static/accessibility/maintainability guidance                     | Applied implementation constraints                            | Useful                                       | Re-reading for every small change wastes context                           |
| `migrate`                  | Coding/migration skill           | Migration                                       | Astro migration workflow                                                | Migration guidance                                            | Useful early                                 | Exact invocation details need verification                                 |
| `ctx-agent-history-search` | History-search skill             | This evidence pass                              | Search and inspect local session history                                | This source-notes document                                    | Essential for chronology                     | Indexed history can omit raw usage metadata                                |
| `technical-writing`        | Writing skill                    | Installed; not evidenced in original work       | Potential article/documentation guidance                                | No incorporated output found                                  | Not assessed                                 | Do not claim it shaped implementation                                      |
| Shiki                      | Library/configuration            | Migration/blog                                  | Static syntax highlighting                                              | `one-dark-pro` configuration                                  | Preserves code readability without client JS | Theme/source output should be measured from build if quoting bundle impact |
| Astro Content Collections  | Astro framework feature          | Blog foundation                                 | Typed content loading/schema/build-time entries                         | `content.config.ts`, listing/article routes                   | Core maintainability win                     | Current APIs are version-sensitive                                         |
| MDX / `@astrojs/mdx`       | Astro integration/content format | Reusable article blocks                         | Import Astro components in posts                                        | `mdx()`, mixed loader, Callout/GitHubSourceLink               | Enables justified special blocks             | Dependency install mismatch temporarily blocked local dev                  |

All rows are conservative: tools are only marked “used” when supported by current files, Git, or inspected session history.

## Important commands

Only commands supported by inspected evidence are listed here.

```sh
ctx --version
ctx status
ctx sources
ctx search "React Astro migration" --workspace /Users/syedahamed/Desktop/workspace/syed-portfolio-lovable --verbose
ctx show session <ctx-session-id> --format markdown --out /tmp/session.md
graphify query "What renders the portfolio home page starting from src/main.tsx and src/App.tsx?"
graphify query "Which React-only dependencies are imported by reachable portfolio code?"
graphify update .
npx astro add mdx
npm run lint
npm run test
npm run check
npm run build
npx astro check
npm run preview
```

`/graphify ./web --no-cluster` remains a **requires verification** candidate, not a historical fact. The exact `npx skills add ...` commands likewise were not found.

## Important prompt excerpts

These are short paraphrases/excerpts, not transcript dumps.

1. **Migration scope — confirmed by session history:** preserve the current design, content, routes, assets, analytics, accessibility, and responsive behavior; prefer Astro components/static HTML; validate with current Astro guidance and browser inspection. This worked because it defined non-negotiable behavior. It was too broad when combined with every repository rule and every possible audit.
2. **Graphify preparation — confirmed by session history:** ask which files/components render the home page, which React-only dependencies are reachable, which interactions and analytics exist, and whether old routes/components are reachable. This was the right abstraction level before deleting code.
3. **Reference extraction — confirmed by session history:** inspect the Jaya Krishna article for colors, typography, widths, spacing, links, code, tables, images, and responsive behavior; produce a report and no code. This prevented premature implementation.
4. **Blog design — confirmed by session history/current spec:** combine the reference report with `docs/current-design-system.md`; keep the portfolio’s palette/fonts/navigation; use a 720px article column and 1100px listing width; avoid gradients/glass effects. This produced an implementation-ready spec.
5. **Blog foundation — confirmed by session history/current code:** use Content Collections, a Zod schema, `glob()`, `getCollection()`, `getStaticPaths()`, `render()`, shared layouts, draft filtering, Shiki, and static SEO. This led directly to the current architecture.
6. **MDX — confirmed by session history/current code:** keep Markdown as the default, enable MDX only for reusable Astro components, keep both formats in one collection, and prove the workflow with a draft example. This corrected the initial “MDX is unnecessary” position without making every post MDX.
7. **GitHubSourceLink — confirmed by session history/current code:** inspect the reference component in Chrome, adapt its behavior to existing tokens, parse GitHub paths/line ranges, wrap safely on mobile, and validate the local example. This was technically justified but the prompt carried more audit scope than the component required.

## Verified measurements

- **Confirmed by current source:** article width token is `45rem`/720px; listing container is `min(100%, 1100px)`; current font families are Space Grotesk, Inter, and JetBrains Mono.
- **Confirmed by generated reports/current source:** primary amber `#f6a823`, green `#47d1a3`, blue `#85b3e0`, foreground `#e0e6eb`, muted text `#6c7c93`, page background `#0a0b0f`, card `#111318`, code background `#0e1015`, border `#1e2129`.
- **Reported measurement:** 629 KB raw / 203 KB gzip before; 169 KB raw / 56 KB gzip after. Supporting build output not found.
- **Not available:** verified performance score; the migration session says its Lighthouse endpoint lacked the Performance category.
- **Requires verification:** both requested token-accounting blocks and both model labels.

## What worked well

- Use Graphify and direct source verification before deletion.
- Keep migration constraints explicit and preserve behavior as the acceptance criterion.
- Use Astro Docs MCP for current APIs rather than relying on model memory.
- Use Chrome DevTools MCP after build because visual typography and responsive behavior escaped static checks.
- Extract design evidence first, then convert it into a local design spec.
- Keep ordinary Markdown semantic and simple; reserve MDX for reusable blocks.
- Treat the repository as the final design-system source of truth when deployed CSS serialization differs.
- Validate drafts, SEO, code highlighting, responsive overflow, and no-client-JS behavior together.

## What was unnecessary

- Running Graphify-style analysis for already-understood leaf components and CSS.
- Repeating the full design-extraction workflow after reports and the blog spec existed.
- Requiring every MCP and skill in a small component prompt.
- Treating `npm run lint` and `npm run test` as independent suites when both map to `astro check`.
- Asking a single long-lived session to hold migration history, design research, blog implementation, MDX, refactors, browser validation, and final reporting simultaneously.
- Claiming exact bundle/token/model values without preserving their original command output and metadata.

## What I would do differently

1. Capture a short baseline before migration: routes, reachable component graph, browser screenshots, console/network state, and a reproducible bundle command.
2. Run Graphify once against the relevant source tree, record the exact command and output, and stop using it for leaf work.
3. Use separate sessions for repository mapping, migration implementation, visual correction, design research, blog foundation, and MDX blocks.
4. Store a concise handoff file after each phase instead of repeating settled context in the next prompt.
5. Create the design reports once and reference them by path.
6. Keep Markdown as the first post format and introduce MDX only after a real reusable block appears.
7. Preserve model/token accounting and build-size command output alongside the commit that produced it.
8. Use Chrome DevTools for diagnosis and a scripted browser suite such as Playwright for repeatable regression checks if the project grows; the latter was not used in the inspected work.

## Strong moments for the final article

- The first migration was not a framework rewrite for its own sake; it was a reachability and delivery-model exercise.
- Graphify was genuinely valuable before deletion and genuinely unnecessary later.
- Astro’s static result still needed browser inspection to catch line-height, font-size, icon, and responsive differences.
- The blog design came from measured reference research plus an audit of the existing portfolio, not from blindly copying another site.
- MDX became justified only when a real reusable block—especially `GitHubSourceLink`—appeared.
- The cost story matters: large prompts and overlapping tools produced context/token waste even when the code outcome was good.
- The durable result is not only less JavaScript; it is a typed content model and a clear boundary between semantic Markdown and special MDX blocks.

## Candidate code excerpts

- Original `src/main.tsx`/`src/App.tsx` provider and router boundary versus current `src/pages/index.astro` composition.
- `package.json` dependency reduction from the React/Radix/Framer Motion stack to Astro/Tailwind/PostHog/Lucide/MDX.
- `src/content.config.ts` showing `defineCollection`, `glob`, and Zod schema.
- `src/pages/blog/[slug].astro` showing `getStaticPaths`, `render`, and `<Content />`.
- `src/components/blog/blocks/GitHubSourceLink.astro` showing path/line parsing and responsive accessibility behavior.
- `src/styles/global.css` showing `--blog-prose-width`, semantic `.blog-prose`, localized `pre`/table overflow, and existing color tokens.

## Candidate screenshots

- **Confirmed by session history:** migration desktop/tablet/mobile screenshots existed temporarily in Chrome DevTools MCP output paths, but those paths are outside the repository and were not preserved as project assets.
- **Confirmed by session history:** reference article and local GitHubSourceLink were inspected at desktop, tablet, and mobile widths.
- **Requires verification:** recover stable screenshots or rerun browser inspection before publishing screenshots in the final article. Do not cite transient temp paths as durable evidence.

## Claims requiring verification

- Exact initial Graphify command and whether `--no-cluster` was used.
- Whether a fresh Codex/Cursor session was necessary for Graphify-generated rules.
- Exact migration/blog model labels and reasoning modes.
- Exact token usage and cached-input figures.
- Original and final bundle command/output files.
- Exact pre-migration route count, especially the commented Blog route.
- Exact individual measurements from the external reference report if quoted.
- Whether any Playwright tests ran outside the indexed Codex sessions.
- Exact skill installation commands.
- Whether the current browser/production build has been rerun after the uncommitted working-tree changes.

## Suggested article outline

1. **Working title direction:** “How I Used Codex, MCPs, and Skills to Migrate My Portfolio to Astro” — direction only, not final.
2. Establish the real constraint: preserve an existing portfolio while reducing accidental runtime JavaScript.
3. Show how Graphify and source inspection created a reachable migration map.
4. Explain the migration prompt and the boundary between static Astro components and browser behavior.
5. Show the first implementation, then the browser-discovered visual corrections.
6. Measure the result honestly, including what was and was not reproducibly measured.
7. Shift from migration to the blog: reference-site extraction, portfolio design audit, and local spec.
8. Implement Content Collections and the shared blog architecture.
9. Reconstruct the Markdown-to-MDX change of mind through `Callout` and `GitHubSourceLink`.
10. Close with tool overlap, context/token waste, fresh-session strategy, and a more efficient next workflow.

## Evidence index

### Current repository

- `package.json` — current dependencies/scripts; **confirmed by current code**.
- `astro.config.mjs` — Astro, MDX, Tailwind Vite, Shiki, env prefix; **confirmed by current code**.
- `src/content.config.ts` — collection loader/schema; **confirmed by current code**.
- `src/pages/blog/index.astro` — listing behavior; **confirmed by current code**.
- `src/pages/blog/[slug].astro` — static article rendering/navigation props; **confirmed by current code**.
- `src/layouts/BlogLayout.astro` — article shell/SEO/draft/nav; **confirmed by current code**.
- `src/components/blog/BlogCard.astro`, `BlogMeta.astro` — reusable listing metadata; **confirmed by current code**.
- `src/components/blog/blocks/Callout.astro`, `GitHubSourceLink.astro` — custom MDX blocks; **confirmed by current code**.
- `src/styles/global.css` — tokens, `.blog-prose`, code/table/image/responsive styles; **confirmed by current code**.
- `docs/blog-authoring.md` — authoring rules and block usage; **confirmed by current code**.
- `docs/current-design-system.md` — local design audit; **confirmed by generated report/current file**.
- `docs/blog-design-spec.md` — blog design decisions; **confirmed by current file**.
- `reference-design-report.md` — reference-site extraction; **confirmed by generated report**.
- `skills-lock.json` — installed skill sources/hashes; **confirmed by current code**.

### Git history

- `7f307b1` — React-to-Astro migration; **confirmed by Git history**.
- `43c8d32` — Lucide/icon and Shiki correction; **confirmed by Git history**.
- `63b1b72` — hero line-height/header transition correction; **confirmed by Git history**.
- `db96bcd` — blog foundation; **confirmed by Git history**.
- `1764125` — design skills and reports; **confirmed by Git history**.
- `3c1ba91` — blog refactor, MDX, Callout, authoring guide; **confirmed by Git history**.

### Historical Codex sessions inspected

- `7bd4be52-fa63-7465-acb1-2d0e2c0e06da` — migration preparation/implementation/validation; **confirmed by ctx**.
- `91f82cc5-6fcb-777e-8157-331e9b118b9d` — reference and portfolio design extraction; **confirmed by ctx**.
- `cd9054b3-19c1-767d-b108-3c77f1fcd762` — blog, MDX, browser validation, GitHubSourceLink, refactors; **confirmed by ctx**.
- `47cefff2-e6e0-72d4-bc33-429afe273a77` and `5a30cdbe-4212-7499-a6bc-f31ed742655e` — supporting Graphify/history setup and repository context; **confirmed by ctx**.

The final article should cite these as internal engineering evidence, not reproduce them as a transcript.
