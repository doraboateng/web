const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_SERVER,
} = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  isDev = phase === PHASE_DEVELOPMENT_SERVER;
  isProd = phase === PHASE_PRODUCTION_SERVER;

  return {
    ...defaultConfig,
    env: {
      isDev,
      isProd,

      apiUrl: process.env.API_URL || 'http://localhost:8800',
      version: process.env.BUILD_VERSION || 'dev',
    },
    reactStrictMode: true,
  };
};
