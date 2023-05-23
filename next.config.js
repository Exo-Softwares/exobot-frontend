/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/src',
  
  compiler: {
    styledComponents: true,
  }
}

module.exports = nextConfig
