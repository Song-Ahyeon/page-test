/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/',
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
