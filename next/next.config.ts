import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import path from 'path';

const nextConfig: NextConfig = {
    turbopack: {
        root: path.resolve(__dirname, '..'),
    },

    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
        ],
    },
    webpack: (config) => {
        config.module.rules.unshift({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        svgo: true,
                        svgoConfig: {
                            plugins: [{ name: 'removeViewBox', active: false }],
                        },
                        prettier: false,
                    },
                },
            ],
        });
        return config;
    },
    transpilePackages: ['lib'],
    logging: {
        fetches: {
            hmrRefreshes: true,
            fullUrl: true,
        },
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    experimental: {
        externalDir: true,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
