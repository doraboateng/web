import Link from 'next/link';
import React from 'react';

import useSearch from '../useSearch';

interface Props {
  locale: string;
  query: string;
}

export default function Results({ locale, query }: Props) {
  const { isLoading, results } = useSearch(query);

  if (isLoading) {
    return <div>...</div>;
  }

  if (!results) {
    return <div>Could not find any results for {query}.</div>;
  }

  return (
    <ul>
      {results.map(({ resourceId, title, type }) => {
        const linkProps = {
          href: '/',
          as: '/',
        };

        switch (type) {
          case 'language':
            linkProps.href = '/[locale]/[langCode]';
            linkProps.as = `/${locale}/${resourceId}`;
            break;

          default:
            linkProps.href = '/';
            linkProps.as = '/';
        }

        return (
          <li key={resourceId}>
            <Link {...linkProps}>
              <a href={linkProps.as}>{title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
