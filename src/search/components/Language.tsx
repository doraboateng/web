import React from 'react';

import { LanguageSearchResult } from '../types';

export default function Language(props: LanguageSearchResult) {
  return <div>{props.title}</div>;
}
