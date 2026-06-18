import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;

export function isPublished(post: BlogPost) {
  return !post.data.draft && post.data.pubDatetime <= new Date();
}

export function getSortedPosts(posts: BlogPost[]) {
  return posts
    .filter(isPublished)
    .sort(
      (a, b) =>
        new Date(b.data.modDatetime ?? b.data.pubDatetime).getTime() -
        new Date(a.data.modDatetime ?? a.data.pubDatetime).getTime(),
    );
}

export function getPostHref(post: BlogPost) {
  return `/posts/${post.id}/`;
}

export function formatPostDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function getReadingMinutes(body = "") {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 220));
}
