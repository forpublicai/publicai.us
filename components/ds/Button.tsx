"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

type ButtonProps = {
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  style?: CSSProperties;
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children = "Try it",
  onClick,
  href,
  style,
  className,
  disabled,
}: ButtonProps) {
  const [hovered, setHovered] = useState(false);

  const sharedStyle: CSSProperties = {
    border: "none",
    cursor: "pointer",
    borderRadius: "var(--radius-pill)",
    backgroundColor: hovered ? "var(--color-brand-hover)" : "var(--color-brand)",
    display: "inline-flex",
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
    textDecoration: "none",
    ...style,
  };

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");
    return (
      <a
        href={href}
        target={isExternal && href.startsWith("http") ? "_blank" : undefined}
        rel={isExternal && href.startsWith("http") ? "noopener noreferrer" : undefined}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={className}
        style={sharedStyle}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      disabled={disabled}
      className={className}
      style={sharedStyle}
    >
      {children}
    </button>
  );
}
