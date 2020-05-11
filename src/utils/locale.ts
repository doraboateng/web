import { IncomingMessage } from 'http';

export const LOCALE_GERMAN = 'de';
export const LOCALE_ENGLISH = 'en';
export const LOCALE_SPANISH = 'es';
export const LOCALE_FRENCH = 'fr';
export const LOCALE_PORTUGUESE = 'pt';

export type Locale =
  | typeof LOCALE_ENGLISH
  | typeof LOCALE_FRENCH
  | typeof LOCALE_GERMAN
  | typeof LOCALE_PORTUGUESE
  | typeof LOCALE_SPANISH;

export const supportedLocales: Locale[] = [
  LOCALE_ENGLISH,
  LOCALE_FRENCH,
  LOCALE_GERMAN,
  LOCALE_PORTUGUESE,
  LOCALE_SPANISH,
];

export const getLocale = (request: IncomingMessage): Locale => {
  return LOCALE_ENGLISH;
};

export const getLocalizedUrl = (request: IncomingMessage): string => {
  const paths = (request.url || '')
    .split('/')
    .map(path => decodeURIComponent(path).trim())
    .filter(path => path.length > 0)
    .map(path => encodeURIComponent(path));
  
  if (!paths || !supportedLocales.includes((paths[0] as Locale))) {
    paths.unshift(getLocale(request));
  }

  return `/${paths.join("/")}`;
};