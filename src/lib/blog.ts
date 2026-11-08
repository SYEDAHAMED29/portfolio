import { getCollection } from "astro:content";

/** Rough reading time at ~200 words per minute. */
export const readingTime = (body?: string) => {
  if (!body) return undefined;
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 200))} min read`;
};

/**
 * Blog posts sorted newest first. Drafts are included only in dev so they stay
 * reachable by URL while being written; listings should still filter them out.
 */
export const getSortedPosts = async () =>
  (
    await getCollection(
      "blog",
      ({ data }) => import.meta.env.DEV || !data.draft,
    )
  ).sort(
    (a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime(),
  );

/** The newest published posts shown on the home page. Drafts never appear. */
export const getHomePosts = async (limit = 3) =>
  (await getSortedPosts()).filter(({ data }) => !data.draft).slice(0, limit);
