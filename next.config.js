/** @type {import('next').NextConfig} */
const path = require( 'path' );

const nextConfig = {
  sassOptions: {
    includePaths: ['/src/styles/'],
  },
  webpack: (config, { dev }) => {
    config.resolveLoader.alias = {
      ...config.resolveLoader.alias,
      'css-url-loader': './src/lib/utils/webpack-loaders/css-url-loader.js',
    };

    const oneOfRules = config.module.rules.find((rule) => typeof rule.oneOf === 'object');

    if (oneOfRules) {

      oneOfRules.oneOf.forEach((rule) => {
        /**
         * Inject custom loader after css-loader
         */

        const cssLoaderIndex = rule?.use && Array.isArray(rule.use) && rule?.use?.findIndex((use) => {
          return use?.loader?.indexOf('sass-loader') >= 0;
        }) || -1;

        if (cssLoaderIndex >= 0) {
          rule.use.splice(cssLoaderIndex + 1, 0, {
            loader: 'css-url-loader',
            options: {
              basePath: path.dirname(process.cwd()),
            },
          });
        }

      });
    }
    return config;
  },
};

module.exports = nextConfig;
