import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized:true,
  },
  api: {
    bodyParser: true,
    
  },
  // output:"export",
};

export default nextConfig;

