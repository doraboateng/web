import * as Sentry from '@sentry/node';

const log = (
  msg: string,
  severity: Sentry.Severity = Sentry.Severity.Log,
) => Sentry.captureMessage(msg, severity);

const debug = (msg: string) => log(msg, Sentry.Severity.Debug);
const info = (msg: string) => log(msg, Sentry.Severity.Info);
const warning = (msg: string) => log(msg, Sentry.Severity.Warning);
const error = (msg: string) => log(msg, Sentry.Severity.Error);

const logger = { log, debug, info, warning, error };

export default logger;
