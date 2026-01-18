export const domain = process.env.DOMAIN;

export const domainClient = process.env.DOMAIN_CLIENT;
export const domainClientDocker = process.env.DOMAIN_DOCKER_FRONTEND;

export const isProduction = process.env.NODE_ENV === 'production';
export const isDevelopment = process.env.NODE_ENV === 'development';
export const isTest = process.env.NODE_ENV === 'test';

// export let tempTokenDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
// export let tempRegisterDate = new Date(Date.now() + 10 * 60 * 1000);
// export let tempLoginDate = new Date(Date.now() + 31 * 60 * 60 * 1000);
// export let tempRequestPassDate = new Date(Date.now() + 15 * 60 * 1000);

export let tempTokenDate = 7 * 24 * 60 * 60 * 1000;
export let tempRegisterDate = 10 * 60 * 1000;
export let tempLoginDate = 31 * 60 * 60 * 1000;
export let tempRequestPassDate = 15 * 60 * 1000;

export const roundsOfHashing = 10;

export const PAGINATION_LIMIT = parseInt(process.env.PAGINATION!, 10);

export const folderCloud = 'next-movieapp';

export const CLOUDINARY = 'CLOUDINARY';
