/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["prisma"],
    transpilePackages: ["@acme/ui", "lodash-es"],
  },
};

module.exports = nextConfig;
