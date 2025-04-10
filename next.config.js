/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'cdn.midjourney.com',
      'storage.googleapis.com',
      'placehold.co',
      'img.freepik.com'
    ]
  }
};

module.exports = nextConfig; 