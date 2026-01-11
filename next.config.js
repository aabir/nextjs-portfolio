/** @type {import('next').NextConfig} */
const nextConfig = 
  {async rewrites() {
    return [
      {
        // This is the path you will use in your frontend code
        source: '/api/blog/:path*',
        // This is where the request is actually sent (your WordPress API)
        destination: 'https://aabirtech.com/shiblenomanblog/wp-json/wp/v2/:path*',
      },
    ]
  },
  images: {
    domains: ['avatars2.githubusercontent.com'],
  },
};

module.exports = nextConfig;