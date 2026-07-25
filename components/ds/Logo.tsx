import type { CSSProperties } from "react";

const FILES = {
  default: "public-ai-logo.svg",
  mark: "public-ai-logo-mark.svg",
  network: "public-ai-network-logo.svg",
  "inference-utility": "public-ai-inference-utility-logo.svg",
} as const;

type LogoVariant = keyof typeof FILES;

type LogoProps = {
  variant?: LogoVariant;
  height?: number;
  assetsBase?: string;
  style?: CSSProperties;
  className?: string;
  alt?: string;
};

export function Logo({
  variant = "default",
  height = 60,
  assetsBase = "/",
  style,
  className,
  alt = "Public AI",
}: LogoProps) {
  const file = FILES[variant] ?? FILES.default;
  const src = `${assetsBase}${file}`;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ height, width: "auto", display: "block", ...style }}
    />
  );
}

export function LogoMark({
  height = 60,
  assetsBase = "/",
  style,
  className,
  alt = "Public AI",
}: Omit<LogoProps, "variant">) {
  return (
    <Logo
      variant="mark"
      height={height}
      assetsBase={assetsBase}
      style={style}
      className={className}
      alt={alt}
    />
  );
}
