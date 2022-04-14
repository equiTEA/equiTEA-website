// next.config.js
const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
module.exports = {
  assetPrefix: isProd ? '/your-github-repo-name/' : '',
  reactStrictMode: true,
}

module.exports = nextConfig
