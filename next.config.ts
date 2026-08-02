import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "standalone",
  async redirects() {
    return [
      // Force www → apex, same convention as the rest of the catalog.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.restraddle.com" }],
        destination: "https://restraddle.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
