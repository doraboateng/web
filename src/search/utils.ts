import { MixedSearchResultSet } from './types';

// eslint-disable-next-line import/prefer-default-export
export function mergeResults(...resultSets: MixedSearchResultSet[]) {
  return ([] as MixedSearchResultSet)
    .concat(...resultSets)
    .sort((a, b) => b.score - a.score);
}
