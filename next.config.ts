import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "export",
  basePath: "/secont-view",

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: "/secont-view",
  },
};

export default nextConfig;
