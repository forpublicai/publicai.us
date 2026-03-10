import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";
import Markdown from "@/components/Markdown";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/"
        className="text-sm font-medium text-gray-500 hover:text-gray-900"
      >
        ← Back
      </Link>
      <header className="mt-6">
        <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
        <time
          dateTime={post.date}
          className="mt-2 block text-sm text-gray-500"
        >
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </time>
      </header>
      <div className="mt-8">
        <Markdown content={post.content} />
      </div>
    </article>
  );
}
