/**
 * @todo Consider locale when generating text.
 */
// eslint-disable-next-line import/prefer-default-export
export function getExpressionSummary(expression) {
  const { value: title } = expression.titles[0];
  const { value: translation } = expression.practicalTranslations[0];

  return `${title} means ${translation}`;
}
