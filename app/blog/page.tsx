import Link from "next/link";
import PageSection from "@/components/ds/PageSection";
import { getAllPosts } from "@/lib/posts";

export const metadata = {
  title: "Blog | Public AI USA",
  description: "Updates on Public AI services, MOCSI, and Maine public AI.",
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageSection>
        <h1 className="pai-h2">Blog</h1>
        <p className="pai-body mt-6 max-w-2xl">
          Updates on Public AI services, MOCSI, and community-governed AI in Maine.
        </p>
      </PageSection>

      <PageSection borderTop>
        {posts.length === 0 ? (
          <p className="pai-body-secondary">No posts yet.</p>
        ) : (
          <ul className="space-y-0">
            {posts.map((post) => (
              <li key={post.slug} className="pai-hairline-bottom py-8 last:border-b-0">
                <Link href={`/blog/${post.slug}/`} className="block no-underline">
                  <time dateTime={post.date} className="pai-mono">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <h2 className="pai-section mt-2 hover:text-brand">{post.title}</h2>
                  <p className="pai-body-secondary mt-3">{post.excerpt}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
        <Link href="/" className="pai-body mt-8 inline-block no-underline hover:text-brand">
          Back to home
        </Link>
      </PageSection>
    </>
  );
}
