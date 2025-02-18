import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects () {
    return [
      {
        source: "/",
        destination: "/dang-nhap",
        permanent: true
      }
    ]
  }
};

export default nextConfig;
