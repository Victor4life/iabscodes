/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/iabscodes",
  assetPrefix: "/iabscodes/",
};

module.exports = nextConfig;
