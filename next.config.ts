/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';
// Import env for validation, even though it's not directly used in this file
// This ensures environment variables are validated before the Next.js config is used
import './src/env';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */

const nextConfig: NextConfig = {
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'html.tailus.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        port: '',
      },
    ],
    // Optimize image quality and formats
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },
  // Enable aggressive code splitting
  experimental: {
    optimizeCss: true, // Enable CSS optimization
    optimizePackageImports: [
      'framer-motion',
      '@heroui/react',
      'tailwind-merge',
      'zod',
    ],
    // Improve page loading performance
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
  // Optimize production builds
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improve caching for better performance
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value:
              'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/(.*).(jpg|jpeg|png|webp|avif|ico|svg)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*).(js|css)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/github',
        destination: 'https://github.com/jrmatherly/spoons-of-salt',
        permanent: false,
      },
    ];
  },
  // Improve webpack configuration for better performance
  webpack: (config, { dev, isServer }) => {
    // Only run bundle analyzer in production build
    if (!dev && !isServer && process.env.ANALYZE === 'true') {
      // Add bundle analyzer in production when ANALYZE env var is set
      const { withBundleAnalyzer } = require('@next/bundle-analyzer');
      config.plugins.push(
        new withBundleAnalyzer({
          analyzerMode: 'static',
          reportFilename: './analyze/client.html',
          openAnalyzer: false,
        })
      );
    }
    // Optimize webpack for better performance
    if (!config.infrastructureLogging) {
      config.infrastructureLogging = {};
    }
    config.infrastructureLogging.level = 'warn';

    // Reduce the number of logs in the console
    if (!config.stats) {
      config.stats = {};
    }
    config.stats.loggingDebug = false;
    config.stats.cached = false;

    return config;
  },
};

export default nextConfig;
