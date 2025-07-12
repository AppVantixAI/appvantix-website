/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Exclude supabase/functions from webpack compilation
    config.resolve.alias = {
      ...config.resolve.alias,
    }
    
    return config
  },
}

module.exports = nextConfig
