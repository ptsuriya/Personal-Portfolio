/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/codework', destination: '/work', permanent: true },
      { source: '/codework/pricing', destination: '/services', permanent: true },
      { source: '/codework/resume', destination: '/about', permanent: true },
      { source: '/musicwork', destination: '/', permanent: false },
      { source: '/musicwork/:path*', destination: '/', permanent: false },
    ];
  },
};

export default nextConfig;
