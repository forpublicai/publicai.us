import Link from "next/link";
import PageSection from "@/components/ds/PageSection";
import { getAllPosts } from "@/lib/posts";

export default function PartnerFeature() {
  const posts = getAllPosts();
  const partnerPost = posts[0];

  return (
    <PageSection borderTop>
      <h2 className="pai-h3">Maine partners</h2>
      <div className="pai-card mt-6 max-w-3xl">
        {partnerPost ? (
          <>
            <h3 className="pai-section">{partnerPost.title}</h3>
            <p className="pai-body-secondary mt-3">{partnerPost.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Link
                href={`/blog/${partnerPost.slug}/`}
                className="pai-btn-label text-brand no-underline hover:text-brandHover"
              >
                Read more
              </Link>
              <a
                href="mailto:info@publicai.network?subject=Becoming%20a%20MOCSI%20partner"
                className="pai-body no-underline hover:text-brand"
              >
                Become a partner
              </a>
            </div>
          </>
        ) : (
          <>
            <h3 className="pai-section">Our partner in Maine</h3>
            <p className="pai-body-secondary mt-3">
              We&apos;re working with local organizations to bring public AI to
              Maine. Details coming soon.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <Link href="/about/" className="pai-btn-label text-brand no-underline">
                Read more
              </Link>
              <a
                href="mailto:info@publicai.network?subject=Becoming%20a%20MOCSI%20partner"
                className="pai-body no-underline hover:text-brand"
              >
                Become a partner
              </a>
            </div>
          </>
        )}
      </div>
    </PageSection>
  );
}
