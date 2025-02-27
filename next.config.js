/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone", // Change from "export" to "standalone"
  images: {
    unoptimized: true,
  },
  basePath: "/iabscodes",
  assetPrefix: "/iabscodes",
  webpack: (config, { isServer }) => {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
  // Add this to help with chunk loading
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
  },
};

module.exports = nextConfig;
