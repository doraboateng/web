// eslint-disable-next-line import/prefer-default-export
export function concatenateWords(words: string[]) {
  if (words.length < 1) {
    return '';
  }

  if (words.length === 1) {
    return words[0];
  }

  const wordsLessOne = words.slice(0, words.length - 1).join(', ');
  const lastWord = words[words.length - 1];

  return `${wordsLessOne} and ${lastWord}`;
}
