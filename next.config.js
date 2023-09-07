/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/v1/:path*",
        destination: "https://makeup-api.herokuapp.com/api/v1/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
