import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true, // Para facilitar el deploy inicial en Coolify
  },
};

export default nextConfig;
