import type { NextConfig } from "next";
const nextConfig: NextConfig = { output: "export", images: { unoptimized: true }, experimental: { workerThreads: true } };
export default nextConfig;
