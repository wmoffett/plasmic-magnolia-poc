/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turn off React StrictMode for now, as react-aria
  // has some troubles with it. See
  // https://github.com/adobe/react-spectrum/labels/strict%20mode
  reactStrictMode: false,
  env: {
    NEXT_PUBLIC_MAP_BOX_KEY: process.env.NEXT_PUBLIC_MAP_BOX_KEY,
    NEXT_PUBLIC_SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  images: {
    domains: [
      'canario.stg.caring.com',
      'canario-staging.s3.amazonaws.com',
      'caring-prod-canario-files.s3.amazonaws.com',
      'images.unsplash.com',
      'dsjrrk2ui1p8q.cloudfront.net',
      'd13iq96prksfh0.cloudfront.net',
    ],
  },
};

module.exports = nextConfig;
