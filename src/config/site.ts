export const SITE_METADATA = {
  title: "Ryze",
  tagline: "A minimalist Astro starter for personal blogs.",
  description:
    "Ryze is a minimalist, SEO-friendly Astro starter built for content-driven personal blogs and documentation.",
  siteUrl: "https://ryze.pages.dev",
  language: "en",
  locale: "en_US",
  author: {
    name: "Rahul",
    url: "https://ryze.pages.dev",
  },
  social: {
    github: "https://github.com/8366888C/Ryze",
    twitter: undefined,
  },
  defaultImage: "/ryze-lighthouse-score.png",
} as const;

export type SiteMetadata = typeof SITE_METADATA;
