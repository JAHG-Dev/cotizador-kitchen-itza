/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.kitchenitza.com.mx',
      'kitchenitza.com.mx'
    ]
  }
}

module.exports = nextConfig
