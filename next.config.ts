import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "clothesswapper.s3.us-east-005.backblazeb2.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.backblazeb2.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "api.chromastudio.ai",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.chromastudio.ai",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
