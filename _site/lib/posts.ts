import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  title: string;
  date: string;
  excerpt: string;
}

export interface Post extends PostMeta {
  slug: string;
  content: string;
}

function getSlug(filename: string): string {
  return filename.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
}

export function getAllPosts(): Post[] {
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((f) => f.endsWith(".md"))
    .map((filename) => {
      const fullPath = path.join(postsDirectory, filename);
      const raw = fs.readFileSync(fullPath, "utf-8");
      const { data, content } = matter(raw);
      return {
        slug: getSlug(filename),
        title: data.title ?? "",
        date: data.date ?? "",
        excerpt: data.excerpt ?? "",
        content,
      };
    });
  posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
  return posts;
}

export function getPostBySlug(slug: string): Post | null {
  const all = getAllPosts();
  return all.find((p) => p.slug === slug) ?? null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}
