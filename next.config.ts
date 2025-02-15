import type { NextConfig } from 'next';

const basePath = process.env.BASE_PATH || '';

const nextConfig: NextConfig = {
  /* config options here */
  basePath,
  assetPrefix: basePath,
};

export default nextConfig;
