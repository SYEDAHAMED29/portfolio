/**
 * Rehype plugin: open outbound links in a new tab.
 *
 * Any link to another site (http://, https://, or protocol-relative //)
 * gets target="_blank" and rel="noopener noreferrer". In-page anchors and
 * links within this site are left alone, so the table of contents, heading
 * anchors and post-to-post links keep working in the same tab.
 */

const OUTBOUND = /^(https?:)?\/\//i;

export default function rehypeExternalLinks({ site } = {}) {
  const ownHost = site ? new URL(site).host : null;

  const isOutbound = (href) => {
    if (typeof href !== "string" || !OUTBOUND.test(href)) return false;
    if (!ownHost) return true;
    try {
      return new URL(href, site).host !== ownHost;
    } catch {
      return true;
    }
  };

  return (tree) => {
    const visit = (node) => {
      if (
        node.type === "element" &&
        node.tagName === "a" &&
        isOutbound(node.properties?.href)
      ) {
        node.properties.target = "_blank";
        node.properties.rel = ["noopener", "noreferrer"];
      }
      node.children?.forEach(visit);
    };
    visit(tree);
  };
}
