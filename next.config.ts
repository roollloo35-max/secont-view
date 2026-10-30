import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "export",
  basePath: "/secont-view",

  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
};

export default nextConfig;
