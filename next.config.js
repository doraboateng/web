const SentryWebpackPlugin = require('@sentry/webpack-plugin');
const withSourceMaps = require('@zeit/next-source-maps')();

module.exports = (phase, { defaultConfig }) => {
  const DEVELOPMENT = process.env.NODE_ENV === 'development';
  const PRODUCTION = process.env.NODE_ENV === 'production';

  return withSourceMaps({
    ...defaultConfig,
    env: {
      DEVELOPMENT,
      PRODUCTION,

      GRAPHQL_AUTH_TOKEN: process.env.GRAPHQL_AUTH_TOKEN || '',
      GRAPHQL_GRPC_HOST: process.env.GRAPHQL_GRPC_HOST || '',
      GRAPHQL_HTTP_HOST: process.env.GRAPHQL_HTTP_HOST || '',
      VERSION: process.env.BUILD_VERSION || 'dev',
    },
    reactStrictMode: true,
    webpack: (config, options) => {
      // Replace "@sentry/node" imports with "@sentry/browser" when building
      // the browser bundle.
      if (!options.isServer) {
        // eslint-disable-next-line no-param-reassign
        config.resolve.alias['@sentry/node'] = '@sentry/browser';
      }

      // Configure Sentry webpack plugin for sourcemaps.
      if (PRODUCTION && process.env.NEXT_PUBLIC_SENTRY_DSN) {
        config.plugins.push(
          new SentryWebpackPlugin({
            include: '.next',
            ignore: ['node_modules'],
            urlPrefix: '~/_next',
          }),
        );
      }

      return config;
    },
  });
};
