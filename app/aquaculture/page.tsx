import type { Metadata } from "next";

const DEST = "https://aquaculture.publicai.co";

export const metadata: Metadata = {
  title: "Public AI Aquaculture",
  description: "Redirecting to Public AI Aquaculture.",
};

export default function AquacultureRedirectPage() {
  return (
    <main className="pai-container py-8">
      <meta httpEquiv="refresh" content={`0;url=${DEST}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(DEST)});`,
        }}
      />
      <p className="pai-body">
        Public AI Aquaculture has moved.{" "}
        <a href={DEST} className="hover:text-brand">
          Continue to aquaculture.publicai.co
        </a>
        .
      </p>
    </main>
  );
}
