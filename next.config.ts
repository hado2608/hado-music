import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/hado-music",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
