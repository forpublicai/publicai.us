import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function BlogRoll() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">From the blog</h2>
        <ul className="mt-6 space-y-6">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-gray-100 pb-6 last:border-0">
              <Link href={`/blog/${post.slug}/`} className="group block">
                <span className="text-sm text-gray-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
                <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-brand">
                  {post.title}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{post.excerpt}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap items-center gap-4">
          <Link
            href="/blog/"
            className="text-sm font-medium text-brand hover:underline"
          >
            View all posts
          </Link>
          <a
            href="mailto:info@publicai.network?subject=Public%20AI%20USA%20updates"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            Get updates by email
          </a>
        </div>
      </div>
    </section>
  );
}
