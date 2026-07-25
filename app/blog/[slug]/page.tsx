import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "@/components/Markdown";
import PageSection from "@/components/ds/PageSection";
import { getPostBySlug, getAllSlugs } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <PageSection>
        <Link href="/blog/" className="pai-mono no-underline hover:text-brand">
          Back to blog
        </Link>
        <header className="mt-8">
          <h1 className="pai-h2 max-w-4xl">{post.title}</h1>
          <time dateTime={post.date} className="pai-mono mt-4 block">
            {new Date(post.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </header>
      </PageSection>

      <PageSection borderTop>
        <div className="max-w-3xl">
          <Markdown content={post.content} />
          <section className="pai-hairline-top mt-10 pt-8">
            <p className="pai-body">
              Was this relevant to your community or organization?{" "}
              <a
                href="mailto:info@publicai.network?subject=Public%20AI%20USA%20blog%20post"
                className="no-underline hover:text-brand"
              >
                Talk to us
              </a>
              .
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-6">
              <Link href="/#services" className="pai-body no-underline hover:text-brand">
                Explore services
              </Link>
              <Link href="/mocsi/" className="pai-body no-underline hover:text-brand">
                About MOCSI
              </Link>
            </div>
          </section>
        </div>
      </PageSection>
    </>
  );
}
