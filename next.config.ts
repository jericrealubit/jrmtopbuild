import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    // No dynamic/remote photos yet — skip needing a Cloudflare Images
    // binding for the single local logo asset.
    unoptimized: true,
  },
};

initOpenNextCloudflareForDev();

export default nextConfig;
