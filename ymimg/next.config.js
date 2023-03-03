/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/page-test',
  reactStrictMode: false,
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

module.exports = nextConfig
