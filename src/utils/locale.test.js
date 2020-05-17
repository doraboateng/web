import {
  getLocale,
  getLocalizedUrl,

  LOCALE_ENGLISH,
} from './locale';

describe('Locale', () => {
  test('getLocale', () => {
    expect(getLocale()).toEqual(LOCALE_ENGLISH);
  });

  test('getLocalizedUrl', () => {
    expect(getLocalizedUrl({
      url: '/',
    })).toEqual('/en');

    expect(getLocalizedUrl({
      url: '/fr',
    })).toEqual('/fr');

    expect(getLocalizedUrl({
      url: '/de/',
    })).toEqual('/de');

    expect(getLocalizedUrl({
      url: '/twi',
    })).toEqual('/en/twi');

    expect(getLocalizedUrl({
      url: '//twi / /',
    })).toEqual('/en/twi');
  });
});
