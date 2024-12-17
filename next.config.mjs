/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost',
          port: '5000', // Specify the port if the backend runs on a custom port
          pathname: '/images/**', // Match your image path
        },
      ],
    },
  };
  
  
export default nextConfig;
