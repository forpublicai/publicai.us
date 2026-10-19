import Link from "next/link";
import PageSection from "@/components/ds/PageSection";

export default function Hero() {
  return (
    <PageSection>
      <h1 className="pai-display max-w-4xl">Public AI for Maine</h1>
      <p className="pai-ui mt-2 max-w-2xl">
        Value-added AI services for nonprofits, municipalities, and
        education, and the local compute to run them.
      </p>
      <p className="pai-body mt-2 max-w-2xl">
        Every answer MOCSI gives will trace back to its source.{" "}
        <Link href="/provenance/" className="hover:text-brand">
          How provenance works
        </Link>
      </p>
      <p className="mt-4 text-lg opacity-60" aria-hidden="true">
        🥤🌊🦞⛰️
      </p>
    </PageSection>
  );
}
