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
      <section className="mt-10 border-t border-gray-100 pt-6 text-sm text-gray-700">
        <p>
          Was this relevant to your community or organization?{" "}
          <a
            href="mailto:info@publicai.network?subject=Public%20AI%20USA%20blog%20post"
            className="font-medium text-brand hover:underline"
          >
            Talk to us
          </a>
          .
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            See the Maine pilot →
          </Link>
          <Link
            href="/about/"
            className="text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Learn how it works →
          </Link>
        </div>
      </section>
    </article>
  );
}
