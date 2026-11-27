import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'thebeckerteam\\.com' }],
        destination: 'https://www.thebeckerteam.com/:path*',
        permanent: true,
      },
      { source: '/rates', destination: '/mortgage-interest-rates', permanent: true },
      { source: '/programs/va', destination: '/loan-programs/va-loans', permanent: true },
      { source: '/programs/asset-qualifier', destination: '/loan-programs/asset-qualifier-loans', permanent: true },
      // Old Squarespace homepage slug
      { source: '/home', destination: '/', permanent: true },
      { source: '/giving-back', destination: '/about#givingback', permanent: true },
      { source: '/current-mortgage-rates', destination: '/mortgage-interest-rates', permanent: true },
    ]
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        // Long-term cache for static assets
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 86400,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'kpfmkkztgqjqokvfayca.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig
