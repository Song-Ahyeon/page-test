/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== 'production';
const repository = 'page-test';

const nextConfig = {
  basePath: '/page-test',
  reactStrictMode: false,
  assetPrefix: !debug ? `/${repository}/` : "",
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  images: {
    loader: 'imgix',
    path: 'http://song-ahyeon.github.io/page-test'
  },
}

export const prefix =
  process.env.NODE_ENV === "production"
    ? "https://song-ahyeon.github.io/page-test"
    : "";

module.exports = nextConfig
