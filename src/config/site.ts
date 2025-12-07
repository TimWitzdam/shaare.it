export const SITE_METADATA = {
  title: "shaare.it",
  tagline:
    "An open source place to share all kinds of programming errors and their solutions.",
  description:
    "shaare.it is an open source platform to share programming errors and their solutions. The goal of this platform is to help developers, while also protecting the environment by reducing the number of AIs promtped for simple questions.",
  siteUrl: "https://shaare.it",
  language: "en",
  locale: "en_US",
  author: {
    name: "Tim",
    url: "https://shaare.it",
  },
  social: {
    github: "https://github.com/TimWitzdam/shaare.it",
    twitter: undefined,
  },
  defaultImage: "/favicon-96x96.png",
} as const;

export type SiteMetadata = typeof SITE_METADATA;
