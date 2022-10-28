/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    // for test
    domains: ["static.nike.com"],
  },
};

module.exports = nextConfig;
