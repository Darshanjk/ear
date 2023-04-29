/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: [
      "bhimrazy-turbo-train-jqq97vj97pq2566g-8000.preview.app.github.dev",
      "otitis-media-detection.vercel.app",
      "ear-care-iq.up.railway.app",
      "ui-avatars.com",
      "localhost"
    ],
  },
};

module.exports = nextConfig;
