import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import tailwindcss from "@tailwindcss/vite";
import rehypeExternalLinks from "./src/lib/rehype-external-links.mjs";
import rehypeHeadingAnchors from "./src/lib/rehype-heading-anchors.mjs";

const site = "https://www.syedahamed.in";

export default defineConfig({
  site,
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
    // Heading ids must exist before the anchor plugin links to them.
    // Outbound links open in a new tab; in-site links stay in the same tab.
    rehypePlugins: [
      rehypeHeadingIds,
      rehypeHeadingAnchors,
      [rehypeExternalLinks, { site }],
    ],
  },
  integrations: [mdx()],
  vite: {
    plugins: [tailwindcss()],
    // PUBLIC_ is the Astro convention. The legacy prefix remains temporarily
    // supported so the existing PostHog deployment variables continue to work.
    envPrefix: ["PUBLIC_", "VITE_PUBLIC_"],
  },
});
