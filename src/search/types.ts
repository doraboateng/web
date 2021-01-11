export interface SearchResult {
  id: string;
  score: number;
  title: any;
}

export interface ExpressionSearchResult extends SearchResult {
  languages: Array<{ code: string, name: string }>;
  type: 'expression';
  uriId: string;
}

export interface LanguageSearchResult extends SearchResult {
  type: 'language';
}

export type MixedSearchResult =
  | ExpressionSearchResult
  | LanguageSearchResult;

export type MixedSearchResultSet = MixedSearchResult[];

/**
 * Props common to all search result components.
 */
export interface SearchResultProps {
  locale: string;
}
