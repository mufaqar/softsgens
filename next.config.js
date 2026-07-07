/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'softgens.netlify.app' },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

module.exports = nextConfig;
