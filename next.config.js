/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "store.storeimages.cdn-apple.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.apple.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.samsung.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
