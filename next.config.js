const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

const SentryWebpackPlugin = require('@sentry/webpack-plugin');

const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = (phase, { defaultConfig }) => {
  DEVELOPMENT = phase === PHASE_DEVELOPMENT_SERVER;
  PRODUCTION = phase === PHASE_PRODUCTION_SERVER;

  return withSourceMaps({
    ...defaultConfig,
    env: {
      DEVELOPMENT,
      PRODUCTION,

      API_URL: process.env.API_URL,
      SENTRY_DSN: process.env.SENTRY_DSN,
      VERSION: process.env.BUILD_VERSION || 'dev',
    },
    reactStrictMode: true,
    webpack: (config, options) => {
      // Replace "@sentry/node" imports with "@sentry/browser" when building
      // the browser bundle.
      if (!options.isServer) {
        config.resolve.alias['@sentry/node'] = '@sentry/browser'
      }

      // Configure Sentry webpack plugin for sourcemaps.
      if (process.env.SENTRY_DSN && PRODUCTION) {
        config.plugins.push(
          new SentryWebpackPlugin({
            include: '.next',
            ignore: ['node_modules'],
            urlPrefix: '~/_next',
          })
        )
      }

      return config;
    },
  });
};
