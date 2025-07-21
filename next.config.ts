import type { NextConfig } from "next";
// import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  publicRuntimeConfig: {
    longdoMapKey: process.env.LONGDO_MAP_KEY || "",
  },
  // outputFileTracingRoot: path.join(__dirname, "../"),
};

export default nextConfig;
