/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/",
  output: "export",
  reactStrictMode: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
