/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Enable Next.js image optimization
    // Configure remote image domains for external car images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.autoxuyenviet.com',
      },
      {
        protocol: 'https',
        hostname: 'images2.thanhnien.vn',
      },
      {
        protocol: 'https',
        hostname: 'hondavinh.net',
      },
      {
        protocol: 'https',
        hostname: 'drive.gianhangvn.com',
      },
      {
        protocol: 'https',
        hostname: 'image.danchoioto.vn',
      },
      {
        protocol: 'https',
        hostname: 'hyundai-thuduc.vn',
      },
      {
        protocol: 'https',
        hostname: 'i1-vnexpress.vnecdn.net',
      },
      {
        protocol: 'https',
        hostname: 'fordassured.com.vn',
      },
      {
        protocol: 'https',
        hostname: 'www.355toyota.com',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
      },
    ],
  },
}

module.exports = nextConfig

