module.exports = {
  // i18n: {
  //   defaultLocale: "ru-RU",
  // },
  experimental: {
    outputStandalone: true,
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*/',
        destination: 'http://localhost:3000/:path*/' // Proxy to Backend
      }
    ]
  },
  trailingSlash: true,
}
