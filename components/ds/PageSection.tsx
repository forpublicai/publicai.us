import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  borderTop?: boolean;
  background?: "page" | "subtle";
};

export default function PageSection({
  children,
  id,
  className = "",
  borderTop = false,
  background = "page",
}: PageSectionProps) {
  const bgClass = background === "subtle" ? "bg-subtle" : "bg-white";

  return (
    <section
      id={id}
      className={[
        "py-6 sm:py-8",
        bgClass,
        borderTop ? "pai-hairline-top" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pai-container">{children}</div>
    </section>
  );
}
