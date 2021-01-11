import { Language } from './types.generated';

export function getLanguageName(language: Language, locale: string = 'eng') {
  let { value: name } = language.names[0];
  const transliteration = language
    .names
    .find(({ langCode }) => langCode === locale);

  if (transliteration) {
    name += ` (${transliteration})`;
  }

  return name;
}

export function getLanguageNamesAndCodes(
  graphLangList: Language[],
  locale: string = 'eng',
) {
  return graphLangList.map(lang => ({
    code: lang.code,
    name: getLanguageName(lang, locale),
  }));
}

export function getLanguageSummary(
  graphLangList,
  locale = 'eng',
  hyperlink = false,
) {
  const langs = getLanguageNamesAndCodes(graphLangList, locale);

  if (hyperlink) {
    for (let i = 0; i < langs.length; i++) {
      langs[i].name = `<a href="/${langs[i].code}">${langs[i].name}</a>`;
    }
  }

  const names = langs.map(lang => lang.name);

  if (names.length === 1) {
    return names[0];
  }

  const namesMinusOne = names.slice(0, names.length - 1).join(', ');
  const lastName = names[names.length - 1];

  return `${namesMinusOne} and ${lastName}`;
}
