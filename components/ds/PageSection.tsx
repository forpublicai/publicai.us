import type { ReactNode } from "react";

type PageSectionProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  background?: "page" | "subtle" | "canvas";
};

export default function PageSection({
  children,
  id,
  className = "",
  borderTop = false,
  borderBottom = false,
  background = "page",
}: PageSectionProps) {
  const bgClass =
    background === "subtle"
      ? "bg-subtle"
      : background === "canvas"
        ? "bg-parchment"
        : "bg-white";

  return (
    <section
      id={id}
      className={[
        "py-20 sm:py-[120px]",
        bgClass,
        borderTop ? "pai-hairline-top" : "",
        borderBottom ? "pai-hairline-bottom" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className="pai-container">{children}</div>
    </section>
  );
}
