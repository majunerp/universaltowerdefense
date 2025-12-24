import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/codes", destination: "/universal-tower-defense-codes", permanent: true },
      { source: "/races", destination: "/universal-tower-defense-guide", permanent: true },
      { source: "/weapons", destination: "/universal-tower-defense-wiki", permanent: true },
      { source: "/forging", destination: "/universal-tower-defense-guide", permanent: true },
      { source: "/islands", destination: "/universal-tower-defense-guide", permanent: true },
      { source: "/mechanics", destination: "/universal-tower-defense-guide", permanent: true },
    ];
  },
};

export default nextConfig;
