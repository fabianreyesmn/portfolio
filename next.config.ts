import type {NextConfig} from 'next';

// IMPORTANT: Replace 'TechFolio' with your GitHub repository name.
const repo = 'TechFolio';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: `/${repo}`,
  assetPrefix: `/${repo}/`,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
