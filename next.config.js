/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ['https://picsum.photos'],
    loader: "akamai",
    path: ""
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH //the same as basePath, but for static resource like css javascript
}

module.exports = nextConfig
