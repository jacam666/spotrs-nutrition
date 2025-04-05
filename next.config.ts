import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true, // ✅ this stops build from failing on ESLint errors
  },
};

export default nextConfig;
