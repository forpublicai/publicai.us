"use client";

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, CSSProperties, ReactNode } from "react";
import { useState } from "react";

type ButtonLinkoutProps = {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
};

export default function ButtonLinkout({
  children = "Try it",
  href,
  onClick,
  style,
  className,
}: ButtonLinkoutProps) {
  const [hovered, setHovered] = useState(false);

  const sharedStyle: CSSProperties = {
    border: "none",
    cursor: "pointer",
    textDecoration: "none",
    borderRadius: "var(--radius-pill)",
    backgroundColor: hovered ? "var(--pai-gray-400)" : "var(--pai-black)",
    display: "inline-flex",
    flexDirection: "row",
    gap: 2,
    alignItems: "center",
    justifyContent: "center",
    padding: "var(--button-padding)",
    height: "var(--button-height)",
    boxSizing: "border-box",
    fontFamily: "var(--font-sans)",
    fontWeight: 600,
    fontSize: "var(--type-button-size)",
    lineHeight: 1.4,
    color: "#fff",
    textTransform: "uppercase",
    whiteSpace: "nowrap",
    transition: "background-color 120ms ease",
    ...style,
  };

  const arrow = (
    <svg
      width="7"
      height="7"
      viewBox="0 0 6 6.011"
      fill="#fff"
      style={{ marginBottom: 2 }}
      aria-hidden="true"
    >
      <path
        d="M 5.01 4.993 L 5.01 1.052 L 5.649 1.091 L 0.735 6.011 L 0 5.276 L 4.914 0.362 L 4.965 1.001 L 1.007 1.001 L 1.007 0 L 6 0.011 L 6 4.993 L 5.01 4.993 Z"
      />
    </svg>
  );

  const isExternal = Boolean(href?.startsWith("http"));

  if (href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={className}
        style={sharedStyle}
      >
        <span>{children}</span>
        {isExternal ? arrow : null}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={className}
      style={sharedStyle}
    >
      <span>{children}</span>
      {arrow}
    </button>
  );
}
