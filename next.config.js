/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  httpAgentOptions: {
    keepAlive: false,
  },
  images: {
    domains: ["m.media-amazon.com"],
  },
}

module.exports = nextConfig
