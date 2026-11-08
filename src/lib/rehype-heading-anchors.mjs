/**
 * Rehype plugin: append a "link to this section" anchor to article headings.
 *
 * Must run after `rehypeHeadingIds` so every heading already has an `id`.
 * The anchor holds only an icon (no text nodes), so the heading text that
 * Astro collects for the table of contents stays clean.
 */

const LINK_ICON_PATHS = [
  "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
  "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
];

function linkIcon() {
  return {
    type: "element",
    tagName: "svg",
    properties: {
      viewBox: "0 0 24 24",
      width: "18",
      height: "18",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ariaHidden: "true",
      focusable: "false",
    },
    children: LINK_ICON_PATHS.map((d) => ({
      type: "element",
      tagName: "path",
      properties: { d },
      children: [],
    })),
  };
}

export default function rehypeHeadingAnchors({ levels = ["h2", "h3"] } = {}) {
  return (tree) => {
    const visit = (node) => {
      if (
        node.type === "element" &&
        levels.includes(node.tagName) &&
        node.properties?.id
      ) {
        node.children.push({
          type: "element",
          tagName: "a",
          properties: {
            className: ["heading-anchor"],
            href: `#${node.properties.id}`,
            ariaLabel: "Link to this section",
            dataHeadingAnchor: "",
          },
          children: [linkIcon()],
        });
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
