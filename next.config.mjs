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
  // Explicitly use webpack instead of Turbopack to maintain compatibility with GLB loader
  webpack: (config, { webpack }) => {
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
  // Disable Turbopack explicitly
  experimental: {
    turbo: {
      rules: {},
    },
  },
};

export default nextConfig;