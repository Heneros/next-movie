export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const isDev = process.env.NODE_ENV === 'production' ? false : BASE_URL;

// export const NEST_API = process.env.NEXT_PUBLIC_NEST_API;

export const DOMAIN_BACKEND = process.env.NEXT_PUBLIC_DOMAIN_BACKEND;

// export const URL_BACKEND = 'http://nestjs_app:3000';
// export const DOCKER_BACKEND = process.env.NEXT_PUBLIC_DOMAIN_DOCKER;

export const MAX_SIZE_IMG = parseInt(
    process.env.NEXT_PUBLIC_MAX_SIZE_IMAGE!,
    10,
);
