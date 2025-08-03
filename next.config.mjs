/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // enables static export
  images: {
    unoptimized: true, // required for static hosting to load images
  },
  // any other config here
};

export default nextConfig;
