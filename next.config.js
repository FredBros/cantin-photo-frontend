/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = {
  reactStrictMode: false,
  images: {
    loader: "default",
    domains: [
      "localhost",
      "picsum.photos",
      "res.cloudinary",
      "cloudinary",
      "res.cloudinary.com",
    ],
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};