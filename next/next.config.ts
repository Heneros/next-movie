import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    // i18n: {
    //     locales: ['en-US', 'de'],
    //     defaultLocale: 'en-US',
    // },
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
    // swcMinify: true,
    logging: {
        fetches: {
            hmrRefreshes: true,
            fullUrl: true,
        },
    },
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: { ignoreBuildErrors: true },
    experimental: {
        // forceSwcTransforms: true,

        externalDir: true,
    },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
