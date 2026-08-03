import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.syedahamed.in",
  markdown: {
    shikiConfig: {
      theme: "one-dark-pro",
    },
  },
  vite: {
    plugins: [tailwindcss()],
    // PUBLIC_ is the Astro convention. The legacy prefix remains temporarily
    // supported so the existing PostHog deployment variables continue to work.
    envPrefix: ["PUBLIC_", "VITE_PUBLIC_"],
  },
});
