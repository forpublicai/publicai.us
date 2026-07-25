import Link from "next/link";
import PageSection from "@/components/ds/PageSection";
import { getAllPosts } from "@/lib/posts";

export default function BlogRoll() {
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <PageSection borderTop>
      <h2 className="pai-h3">From the blog</h2>
      <ul className="mt-8 space-y-0">
        {posts.map((post) => (
          <li key={post.slug} className="pai-hairline-bottom py-6 last:border-b-0">
            <Link href={`/blog/${post.slug}/`} className="group block no-underline">
              <time dateTime={post.date} className="pai-mono">
                {new Date(post.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </time>
              <h3 className="pai-section mt-2 group-hover:text-brand">
                {post.title}
              </h3>
              <p className="pai-body-secondary mt-2">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap items-center gap-6">
        <Link href="/blog/" className="pai-body no-underline hover:text-brand">
          View all posts
        </Link>
        <a
          href="mailto:info@publicai.network?subject=Public%20AI%20USA%20updates"
          className="pai-body-secondary no-underline hover:text-brand"
        >
          Get updates by email
        </a>
      </div>
    </PageSection>
  );
}
