const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env["ANALYZE"] === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "placehold.jp",
      },
    ],
  },
};

module.exports = withBundleAnalyzer(nextConfig);
