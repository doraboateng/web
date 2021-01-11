import { useEffect, useState } from 'react';

import { getExpressionSearchResults } from '../expression';
import { getLanguageSearchResults } from '../language';
import { MixedSearchResult } from '../types';
import { mergeResults } from '../utils';
import { logError } from '../../shared';

export default function useSearch(query: string, locale: string = 'eng') {
  const [error, setError] = useState<Error>(null);
  const [results, setResults] = useState<MixedSearchResult[]>(null);
  const isLoading = !error && !results;

  console.log('useSearch locale', locale);

  useEffect(() => {
    Promise.all([
      getExpressionSearchResults(query),
      getLanguageSearchResults(),
    ])
      .then(resultSets => mergeResults(...resultSets))
      .then(mergedResults => setResults(mergedResults))
      .catch(searchError => {
        logError(searchError);
        setError(searchError);

        return false;
      });
  }, [query]);

  return { error, isLoading, results };
}
