import type { BlogType } from "../content.config";

export const getBlogSlug = (blog: BlogType) => {
  const fileName = blog.id.split("/").pop() ?? blog.id;
  return fileName.replace(/\.md$/i, "");
};
