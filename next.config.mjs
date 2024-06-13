/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cyan-interesting-takin-110.mypinata.cloud',
                port: '',
                pathname: '/ipfs/**',
            }
        ]
    }
};

export default nextConfig;
