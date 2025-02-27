/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    loader: "akamai",
    path: "",
  },
  basePath: process.env.NODE_ENV === "production" ? "/iabscodes" : "",
  assetPrefix: process.env.NODE_ENV === "production" ? "/iabscodes" : "",
};

module.exports = nextConfig;
