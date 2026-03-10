import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export default function PartnerFeature() {
  const posts = getAllPosts();
  const partnerPost = posts[0];

  if (!partnerPost) {
    return (
      <section className="border-y border-gray-100 bg-gray-50/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-gray-900">Local partner</h2>
          <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
            <h3 className="text-lg font-semibold text-gray-900">
              Our partner in Maine
            </h3>
            <p className="mt-2 text-gray-600">
              We&apos;re working with local organizations to bring public AI to
              Maine. Details coming soon.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about/"
                className="inline-flex items-center rounded bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand/90"
              >
                Read more →
              </Link>
              <a
                href="mailto:info@publicai.network?subject=Becoming%20a%20local%20partner"
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                Your organization here — get in touch
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="border-y border-gray-100 bg-gray-50/50 py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-gray-900">Local partner</h2>
        <div className="mt-4 rounded-lg border border-gray-200 bg-white p-6">
          <h3 className="text-lg font-semibold text-gray-900">
            {partnerPost.title}
          </h3>
          <p className="mt-2 text-gray-600">
            {partnerPost.excerpt}
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-4">
            <Link
              href={`/blog/${partnerPost.slug}/`}
              className="inline-flex items-center rounded bg-brand px-4 py-2 text-sm font-medium text-white hover:bg-brand/90"
            >
              Read more →
            </Link>
            <a
              href="mailto:info@publicai.network?subject=Becoming%20a%20local%20partner"
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Become a partner
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
