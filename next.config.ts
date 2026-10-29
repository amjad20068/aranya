import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    qualities: [75, 80, 82, 85],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
