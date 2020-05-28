import * as Sentry from '@sentry/node';

const bootstrapSentry = () =>  {
  if (process.env.PRODUCTION && process.env.NEXT_PUBLIC_SENTRY_DSN) {
    try {
      Sentry.init({
        enabled: Boolean(process.env.PRODUCTION),
        dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      });
    } catch (error) {
      console.error(error);
    }
  }
};

export default bootstrapSentry;
