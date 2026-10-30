import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  output: "export",
  basePath: "/secont-view",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roollloo35-max.github.io",
        pathname: "/second_view/**", // Укажите имя вашего репозитория с картинками
      },]
  },
  trailingSlash: true,
  
};

export default nextConfig;
