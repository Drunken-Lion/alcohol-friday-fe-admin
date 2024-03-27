/** @type {import('next').NextConfig} */

module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: '/v1/:path*',
        destination: `https://api.alcoholfriday.shop/v1/:path*`,
      },
    ];
  },
};
