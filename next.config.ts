import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  async redirects() {
    return [
      { source: "/loi", destination: "/waitlist/", permanent: true },
      { source: "/loi/", destination: "/waitlist/", permanent: true },
      { source: "/aquaculture", destination: "https://aquaculture.publicai.co", permanent: true },
      { source: "/aquaculture/", destination: "https://aquaculture.publicai.co", permanent: true },
    ];
  },
};

export default nextConfig;
