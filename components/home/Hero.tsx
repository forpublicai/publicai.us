import Link from "next/link";
import PageSection from "@/components/ds/PageSection";
import { audiences } from "@/lib/audiences";

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
      <nav aria-label="Information for" className="mt-4 flex flex-wrap items-center gap-2">
        <span className="pai-mono">Information for:</span>
        {audiences.map((a) => (
          <Link
            key={a.id}
            href={`/information/#${a.id}`}
            className="pai-body rounded-full border border-hairline px-3 py-1 no-underline hover:text-brand"
          >
            {a.label}
          </Link>
        ))}
      </nav>
      <p className="mt-4 text-lg opacity-60" aria-hidden="true">
        🥤🌊🦞⛰️
      </p>
    </PageSection>
  );
}
