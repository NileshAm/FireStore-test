import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "media.geeksforgeeks.org",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
