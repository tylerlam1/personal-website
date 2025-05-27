/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      // Enable styled-components SSR and displayName
      ssr: true,
      displayName: true,
      // You can add additional styled-components options here
    },
  },
};

module.exports = nextConfig;

