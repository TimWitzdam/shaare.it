import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { BlogType } from "../content.config";
import type { APIContext } from "astro";
import { SITE_METADATA } from "../config/site";
import { getBlogSlug } from "../utils/blog";

export async function GET(context: APIContext) {
  if (!context.site) {
    return new Response("Site is not defined on the request context", {
      status: 500,
    });
  }

  const blogs: BlogType[] = await getCollection("blogs");
  return rss({
    title: SITE_METADATA.title,
    description: SITE_METADATA.description,
    site: context.site,
    trailingSlash: false,
    customData: `
      <language>${SITE_METADATA.locale.toLowerCase().replace("_", "-")}</language>
      <ttl>60</ttl>
    `,
    items: blogs.map((blog: BlogType) => ({
      title: blog.data.title,
      description: blog.data.description,
      pubDate: blog.data.date,
      author: SITE_METADATA.author.name,
      link: `/${getBlogSlug(blog)}/`,
    })),
  });
}
