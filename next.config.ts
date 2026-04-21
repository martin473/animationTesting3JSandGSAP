import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      { source: "/panel", destination: "/creativecoding", permanent: true },
      {
        source: "/portfolio/streamer",
        destination: "/streamer",
        permanent: true,
      },
      { source: "/portfolio", destination: "/lawbee", permanent: true },
      {
        source: "/sawyer/blog/:slug",
        destination: "/about/blog/:slug",
        permanent: true,
      },
      { source: "/sawyer", destination: "/about", permanent: true },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.sawyersweet.net",
        pathname: "/images/**",
      },
    ],
  },
};

export default nextConfig;
