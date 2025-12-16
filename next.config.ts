import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // En producción, ignorar errores de TypeScript durante el build
    ignoreBuildErrors: false,
  },
  eslint: {
    // En producción, ignorar errores de ESLint durante el build
    ignoreDuringBuilds: false,
  },
};

export default nextConfig;
