type LogoProps = {
  height?: number;
  className?: string;
  alt?: string;
};

export function Logo({
  height = 60,
  className,
  alt = "Public AI",
}: LogoProps) {
  return (
    <img
      src="/public-ai-logo.svg"
      alt={alt}
      className={className}
      style={{ height, width: "auto", display: "block" }}
    />
  );
}
