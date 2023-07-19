/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*',
      },
      {
        source: '/api:path*',
        destination: 'localhost:3000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
