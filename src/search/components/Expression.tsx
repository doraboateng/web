import Link from 'next/link';
import React from 'react';

import SearchResult from './SearchResult';
import { ExpressionSearchResult, SearchResultProps } from '../types';

type Props = ExpressionSearchResult & SearchResultProps;

export default function Expression(props: Props) {
  const uri = `/${props.locale}/gem/${props.uriId}`;

  const languages = props.languages.map(lang => {
    const langUri = `/${props.locale}/${lang.code}`;

    return (
      <Link as={langUri} href="/[locale]/[langCode]">
        <a href={langUri}>
          {lang.name}
        </a>
      </Link>
    );
  });

  if (languages.length > 1) {
    languages.splice(1, 0, <span>and</span>);
  }

  return (
    <SearchResult>
      <Link as={uri} href="/[locale]/gem/[title]">
        <a href={uri}>
          {props.title}
        </a>
      </Link>
      <span>in</span>
      {languages.map(element => element)}
    </SearchResult>
  );
}
