import React from 'react';

import ExpressionResult from './Expression';
import LanguageResult from './Language';
import useSearch from '../hooks/useSearch';

interface Props {
  locale: string;
  query: string;
}

export default function Results({ locale, query }: Props) {
  const { isLoading, results } = useSearch(query, locale);

  if (isLoading) {
    return <div>...</div>;
  }

  if (!results || !results.length) {
    return <div>Could not find any results for {query}.</div>;
  }

  return (
    <ul>
      {results.map(result => {
        switch (result.type) {
          case 'expression':
            return (
              <ExpressionResult
                {...result}
                key={result.id}
                locale={locale}
              />
            );

          case 'language':
            return (
              <LanguageResult
                {...result}
                key={result.id}
              />
            );

          default:
            return null;
        }
      })}
    </ul>
  );
}
