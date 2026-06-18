import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { profile } from "@/data/profile";
import { getPostHref, getSortedPosts } from "@/utils/posts";

export async function GET(context: { site: URL }) {
  const posts = getSortedPosts(await getCollection("blog"));

  return rss({
    title: `${profile.name} - ${profile.domain}`,
    description: profile.blogIntro,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDatetime,
      link: getPostHref(post),
      categories: post.data.tags,
    })),
  });
}
