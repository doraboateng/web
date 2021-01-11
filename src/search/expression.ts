import { ExpressionSearchResult } from './types';
import getByUuidQuery from './operations/GetExpressionsByUuid.gql';
import searchExpressionsQuery from './operations/SearchExpressions.gql';
import {
  fetchGraphQL,
  getExpressionSummary,
  getLanguageNamesAndCodes,
  logWarning,

  GetExpressionsByUuidQuery,
  SearchExpressionsQuery,
} from '../shared';

export async function getSortedUuidMap(query: string) {
  const scoredUuids = new Map<string, number>();
  const response = await fetchGraphQL<SearchExpressionsQuery>(
    searchExpressionsQuery,
    { query },
  );

  try {
    const { byTitle, byLiteral, byPractical, byMeaning } = response;

    // Combine results from the 4 matching methods.
    for (const matchSet of [byTitle, byLiteral, byPractical, byMeaning]) {
      for (const { matches, uuid } of matchSet) {
        // Score each match so they can be sorted later. By default, each match
        // receives a score of "1", unless the UUID has been matched more than
        // once.
        let score = scoredUuids.has(uuid) ? scoredUuids.get(uuid) : 1;

        if (score < 3) {
          matches.forEach(({ value }) => {
            if (value === query) {
              score = 3;
            }
          });
        }

        scoredUuids.set(uuid, score);
      }
    }
  } catch (error) {
    logWarning(error);
  }

  // Return sorted UUID map.
  return new Map(Array.from(scoredUuids).sort((a, b) => b[1] - a[1]));
}

export async function getExpressionSearchResults(query: string) {
  const uuidMap = await getSortedUuidMap(query);
  const uuids = Array.from(uuidMap).map(pair => pair[0]);
  const scores = Array.from(uuidMap).map(pair => pair[1]);
  const { queryExpression } = await fetchGraphQL<GetExpressionsByUuidQuery>(
    getByUuidQuery,
    { uuids },
  );

  return queryExpression.map((expression, i) => ({
    id: expression.uuid,
    languages: getLanguageNamesAndCodes(expression.languages, 'eng'),
    score: scores[i],
    title: getExpressionSummary(expression),
    type: 'expression',
    uriId: encodeURIComponent(expression.titles[0].value),
  } as ExpressionSearchResult));
}
