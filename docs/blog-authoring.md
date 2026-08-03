# Blog authoring guide

The blog supports ordinary Markdown and MDX in the same `blog` content collection. Both formats use the same frontmatter schema, layout, routes, SEO, draft filtering, and Shiki `one-dark-pro` code highlighting.

## Choose a format

Use `.md` when the post only needs normal Markdown: prose, headings, lists, links, code, tables, quotes, and images. Markdown is the default.

Use `.mdx` when the post imports a custom Astro component or needs expressions or another specialized content block. MDX is optional; do not use it just because it is available.

## Markdown post template

Save a file under `src/content/blog/`:

```md
---
title: "A Clear Technical Article Title"
description: "A concise description used in listings and page metadata."
publishedDate: 2026-08-04
updatedDate: 2026-08-05
category: "Engineering"
tags:
  - Astro
  - Performance
featured: false
draft: true
image: /article-image.png
---

Introductory paragraph.

## First section

Write the article body here.
```

## MDX post template

Import an Astro component using the path relative to the MDX file:

```mdx
---
title: "An MDX Article"
description: "An article that needs one reusable content block."
publishedDate: 2026-08-04
category: "Engineering"
tags:
  - Astro
  - MDX
featured: false
draft: true
---

import Callout from "../../components/blog/blocks/Callout.astro";

Normal Markdown still works here.

<Callout type="info" title="A useful detail">

This is Markdown content nested inside an Astro component.

</Callout>
```

## Frontmatter reference

| Field           | Type             | Required | Purpose                                                                 | Example                    |
| --------------- | ---------------- | -------: | ----------------------------------------------------------------------- | -------------------------- |
| `title`         | string           |      Yes | Article title, page title, and listing title.                           | `"Moving a site to Astro"` |
| `description`   | string           |      Yes | Article summary, listing excerpt, and description metadata.             | `"A migration journal."`   |
| `publishedDate` | date             |      Yes | Publication date used for sorting and metadata.                         | `2026-08-04`               |
| `updatedDate`   | date             |       No | Optional last-updated date.                                             | `2026-08-05`               |
| `category`      | string           |      Yes | Visible article category.                                               | `"Engineering"`            |
| `tags`          | array of strings |      Yes | Compact topic labels.                                                   | `["Astro", "Migration"]`   |
| `featured`      | boolean          |       No | Places the post in the featured listing treatment; defaults to `false`. | `true`                     |
| `draft`         | boolean          |       No | Hides the post from production; defaults to `false`.                    | `true`                     |
| `image`         | string           |       No | Optional public image path used in the article and Open Graph metadata. | `/images/article.png`      |

## Available custom blocks

### `Callout`

Import it in an `.mdx` file:

```mdx
import Callout from "../../components/blog/blocks/Callout.astro";
```

Props:

- `type`: optional; `note`, `info`, `warning`, or `success`. Defaults to `note`.
- `title`: optional visible label. If omitted, the variant label is used.

```mdx
<Callout type="warning" title="Check this before shipping">

The block accepts normal Markdown content, including **strong text** and lists.

</Callout>
```

The label and border communicate the variant together, so meaning does not depend on color alone.

## Standard Markdown examples

````md
## A heading

[An inline link](https://example.com) and `inline code`.

```ts
const answer = 42;
```

> A semantic blockquote.

| Name    | Value |
| ------- | ----- |
| Example | Yes   |

![Meaningful image description](/images/example.png)

---
````

These elements do not require MDX components. Keep using the existing semantic Markdown and `.blog-prose` styling.

## Authoring rules

- Default to `.md`.
- Use `.mdx` when importing at least one component or using MDX-only syntax.
- Keep one `h1` owned by the article layout; begin body sections at `##`.
- Always include language identifiers on fenced code blocks.
- Always provide meaningful image alt text.
- Mark unfinished posts as `draft: true`.
- Do not duplicate article title metadata manually inside the body.
- Avoid client-side components unless the article genuinely needs interaction.
- Do not place unsanitized external content into `set:html`.

## Local validation

From the repository root:

```sh
npm run dev
npm run check
npx prettier --write src docs
npm run lint
npm run build
npm run preview
```

The existing scripts are:

- `npm run dev` — start local development.
- `npm run check` — run `astro check`.
- `npm run lint` — run the repository's configured Astro check command.
- `npm run build` — create the production static build.
- `npm run preview` — preview the production build.

The MDX example is intentionally a draft. It is visible during development and excluded from production listings and generated routes.
