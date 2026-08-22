import Link from "next/link";
import PageSection from "@/components/ds/PageSection";
import { news } from "@/lib/news";

export default function NewsUpdates() {
  return (
    <PageSection id="news" borderTop>
      <h2 className="pai-h3">News & updates</h2>
      <div className="mt-3 max-w-2xl">
        {news.map((item) => (
          <div key={item.date} className="pai-hairline-top py-3 first:border-t-0 first:pt-0">
            <p className="pai-mono text-brand">
              {new Date(`${item.date}T00:00:00`).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>
            <p className="pai-body mt-1">
              {item.parts.map((part, i) => {
                if (typeof part === "string") {
                  return <span key={i}>{part}</span>;
                }
                if (part.href.startsWith("http")) {
                  return (
                    <a
                      key={i}
                      href={part.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand"
                    >
                      {part.text}
                    </a>
                  );
                }
                return (
                  <Link key={i} href={part.href} className="hover:text-brand">
                    {part.text}
                  </Link>
                );
              })}
            </p>
          </div>
        ))}
      </div>
    </PageSection>
  );
}
