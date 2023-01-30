/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  assetPrefix: process.env.NODE_ENV === "production" ? "/project_name" : ""
}

module.exports = nextConfig
