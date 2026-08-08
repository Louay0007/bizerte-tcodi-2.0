import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.countryflags.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "www.countryflags.com",
        port: "",
      },
    ],
  },
};

export default nextConfig;
