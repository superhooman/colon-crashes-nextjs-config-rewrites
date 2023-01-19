/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://example.com/api/path:colon/:path*',
      }
    ]
  }
}
