/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // ISSO AQUI
  },
  trailingSlash: true,
};

module.exports = nextConfig;
