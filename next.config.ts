import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://sekigahara-idolwars.net/**'),
      new URL('https://yosen2026.sekigahara-idolwars.net/**'),
    ],
    unoptimized: true,
  },
  // output: 'export',
  // trailingSlash: true,
}

export default nextConfig
