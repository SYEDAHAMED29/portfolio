---
title: "Moving My Portfolio from React to Astro"
description: "The reasoning, migration approach, and early results from moving a small portfolio toward Astro's content-first architecture."
publishedDate: 2026-08-04
category: Engineering
tags:
  - Astro
  - Migration
  - Performance
featured: true
draft: true
image: /placeholder.svg
---

This is a test article for the blog system. It documents the shape of the migration without pretending that the final performance numbers are known yet.

The useful constraint was to keep the portfolio recognizable while making the content layer easier to extend. The first pass keeps the visual language, font loading, analytics, and route behavior in one shared shell.

## Why move a small portfolio?

A portfolio does not need a large application runtime for every page. The migration is less about chasing a framework score and more about making the default delivery model match the content:

- render stable navigation and prose as HTML;
- keep interactive behavior at the edges of the site;
- make each article a typed content entry; and
- preserve the existing design tokens while the architecture changes.

The important part is **reducing accidental complexity**, not claiming that one framework is always better. A small site can still have _real_ performance constraints when images, fonts, and third-party scripts compete for the first render.

## The first migration boundary

The first boundary is deliberately boring: collection data, a listing route, a static article route, and a reusable layout. It gives future posts a predictable home without introducing a CMS, search index, or client-side state.

### A typed content entry

The collection schema makes `publishedDate`, `category`, and `tags` required. That means the listing can sort and label posts without defensive checks scattered through the page.

```ts
const post = {
  id: "moving-portfolio-from-react-to-astro",
  data: {
    category: "Engineering",
    tags: ["Astro", "Migration", "Performance"],
  },
};
```

The long identifier `moving-portfolio-from-react-to-astro-and-preserving-existing-navigation-contracts` should wrap inside prose without widening the document.

## A small route model

The route can generate every valid entry at build time. In development, the same path also exposes this intentionally incomplete draft so the visual system can be inspected before publication.

1. Load the `blog` collection.
2. Filter out drafts unless the site is running in development.
3. Sort the remaining entries by publication date.
4. Render the current entry and use adjacent entries for simple chronological navigation.

```sh
npm run check
npm run build
npm run preview
```

> The migration is complete only when the output is easier to reason about than the input. A smaller runtime is useful, but a clear content model is the more durable result.

---

## Measuring the result honestly

The exact before-and-after numbers are intentionally left open until the production build and deployment are measured:

| Metric                                  | Before                      | After                       | Status  |
| --------------------------------------- | --------------------------- | --------------------------- | ------- |
| JavaScript shipped by the article route | [Add original bundle size]  | [Add final bundle size]     | Measure |
| Lighthouse performance                  | [Add Lighthouse comparison] | [Add Lighthouse comparison] | Measure |
| Portfolio routes                        | [Verify exact route count]  | [Verify exact route count]  | Verify  |

The comparison image is also a placeholder until the migration has a meaningful visual regression capture.

![Placeholder for the migration screenshot](/placeholder.svg)

The next useful step is not adding another abstraction. It is to add a second real article, confirm the Markdown styles in production, and then record the measurements above.

## What stays deliberately out of scope

This slice does not add search, pagination, comments, RSS, client hydration, or copy buttons. Those features may be useful later, but none is necessary to prove that the content collection and article route are sound.
