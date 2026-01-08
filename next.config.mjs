/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.dropbox.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
    ],
  },
  webpack(config) {
    // Allow GLB files to be imported
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: 'asset/resource',
      generator: {
        filename: 'static/[hash][ext][query]'
      }
    });

    return config;
  },
};

export default nextConfig;