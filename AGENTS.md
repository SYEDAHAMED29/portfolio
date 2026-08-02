## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, use the installed graphify skill or instructions before doing anything else.

Rules:

- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## Portfolio migration rules

- Consult `graphify-out/graph.json` with scoped `graphify query` commands before broad repository searches.
- Verify Graphify conclusions against source before deleting files.
- Prefer Astro components and static HTML over React islands.
- Do not wrap the existing React application in an Astro page as the final solution.
- Preserve the existing visual design, content, URLs, assets, analytics events, accessibility, and responsive behavior.
- Remove unreachable React and generic UI-library code after verifying reachability.
- Consult the Astro Docs MCP before using version-sensitive Astro, Tailwind, routing, script, image, or configuration APIs.
- Run lint, tests, `astro check`, production build, and browser validation before declaring the migration complete.
