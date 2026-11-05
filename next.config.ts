import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  devIndicators: false,
  async redirects() {
    return [
      { source: "/loi", destination: "/waitlist/", permanent: true },
      { source: "/loi/", destination: "/waitlist/", permanent: true },
      { source: "/funders", destination: "/plan/", permanent: true },
      { source: "/funders/", destination: "/plan/", permanent: true },
    ];
  },
};

export default nextConfig;
