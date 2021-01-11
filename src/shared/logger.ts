import * as Sentry from '@sentry/node';

export function log(
  msg: string,
  severity: Sentry.Severity = Sentry.Severity.Log,
) {
  Sentry.captureMessage(msg, severity);
}

export function logDebug(msg: string) {
  log(msg, Sentry.Severity.Debug);
}

export function logInfo(msg: string) {
  log(msg, Sentry.Severity.Info);
}

export function logWarning(msg: string) {
  log(msg, Sentry.Severity.Warning);
}

export function logError(msg: string) {
  log(msg, Sentry.Severity.Error);
}

/** @deprecated */
const logger = {
  log,
  debug: logDebug,
  info: logInfo,
  warning: logWarning,
  error: logError,
};

export default logger;
