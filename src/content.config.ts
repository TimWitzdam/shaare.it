import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blogs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    readTime: z.number().optional(),
  }),
});

export const collections = { blogs };

export type BlogType = import("astro:content").CollectionEntry<"blogs">;
