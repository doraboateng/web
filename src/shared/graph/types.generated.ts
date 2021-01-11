export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The Int64 scalar type represents a signed 64‐bit numeric non‐fractional value.
   * Int64 can represent values in range [-(2^63),(2^63 - 1)].
   */
  Int64: any;
  /**
   * The DateTime scalar type represents date and time as a string in RFC3339 format.
   * For example: "1985-04-12T23:20:50.52Z" represents 20 minutes and 50.52 seconds after the 23rd hour of April 12th, 1985 in UTC.
   */
  DateTime: any;
};














export type AddLanguageInput = {
  code: Scalars['String'];
  names: Array<TransliterationRef>;
  parent?: Maybe<LanguageRef>;
  lexifier?: Maybe<LanguageRef>;
  relatedLanguages?: Maybe<Array<Maybe<LanguageRef>>>;
  glottologId?: Maybe<Scalars['String']>;
  alphabets?: Maybe<Array<Maybe<AlphabetRef>>>;
  isFamily?: Maybe<Scalars['Boolean']>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type AddStoryLineInput = {
  story: StoryRef;
  content: Scalars['String'];
};

export type AlphabetFilter = {
  code?: Maybe<StringHashFilter>;
  has?: Maybe<AlphabetHasFilter>;
  and?: Maybe<Array<Maybe<AlphabetFilter>>>;
  or?: Maybe<Array<Maybe<AlphabetFilter>>>;
  not?: Maybe<AlphabetFilter>;
};

export type CultureOrder = {
  asc?: Maybe<CultureOrderable>;
  desc?: Maybe<CultureOrderable>;
  then?: Maybe<CultureOrder>;
};

export type TransliterationFilter = {
  hash?: Maybe<StringHashFilter>;
  value?: Maybe<StringFullTextFilter>;
  has?: Maybe<TransliterationHasFilter>;
  and?: Maybe<Array<Maybe<TransliterationFilter>>>;
  or?: Maybe<Array<Maybe<TransliterationFilter>>>;
  not?: Maybe<TransliterationFilter>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addAlphabet?: Maybe<AddAlphabetPayload>;
  updateAlphabet?: Maybe<UpdateAlphabetPayload>;
  deleteAlphabet?: Maybe<DeleteAlphabetPayload>;
  addCulture?: Maybe<AddCulturePayload>;
  updateCulture?: Maybe<UpdateCulturePayload>;
  deleteCulture?: Maybe<DeleteCulturePayload>;
  addExpression?: Maybe<AddExpressionPayload>;
  updateExpression?: Maybe<UpdateExpressionPayload>;
  deleteExpression?: Maybe<DeleteExpressionPayload>;
  addLanguage?: Maybe<AddLanguagePayload>;
  updateLanguage?: Maybe<UpdateLanguagePayload>;
  deleteLanguage?: Maybe<DeleteLanguagePayload>;
  addReference?: Maybe<AddReferencePayload>;
  updateReference?: Maybe<UpdateReferencePayload>;
  deleteReference?: Maybe<DeleteReferencePayload>;
  addScript?: Maybe<AddScriptPayload>;
  updateScript?: Maybe<UpdateScriptPayload>;
  deleteScript?: Maybe<DeleteScriptPayload>;
  addStory?: Maybe<AddStoryPayload>;
  updateStory?: Maybe<UpdateStoryPayload>;
  deleteStory?: Maybe<DeleteStoryPayload>;
  addStoryLine?: Maybe<AddStoryLinePayload>;
  updateStoryLine?: Maybe<UpdateStoryLinePayload>;
  deleteStoryLine?: Maybe<DeleteStoryLinePayload>;
  addTag?: Maybe<AddTagPayload>;
  updateTag?: Maybe<UpdateTagPayload>;
  deleteTag?: Maybe<DeleteTagPayload>;
  addTransliteration?: Maybe<AddTransliterationPayload>;
  updateTransliteration?: Maybe<UpdateTransliterationPayload>;
  deleteTransliteration?: Maybe<DeleteTransliterationPayload>;
};


export type MutationAddAlphabetArgs = {
  input: Array<AddAlphabetInput>;
};


export type MutationUpdateAlphabetArgs = {
  input: UpdateAlphabetInput;
};


export type MutationDeleteAlphabetArgs = {
  filter: AlphabetFilter;
};


export type MutationAddCultureArgs = {
  input: Array<AddCultureInput>;
};


export type MutationUpdateCultureArgs = {
  input: UpdateCultureInput;
};


export type MutationDeleteCultureArgs = {
  filter: CultureFilter;
};


export type MutationAddExpressionArgs = {
  input: Array<AddExpressionInput>;
};


export type MutationUpdateExpressionArgs = {
  input: UpdateExpressionInput;
};


export type MutationDeleteExpressionArgs = {
  filter: ExpressionFilter;
};


export type MutationAddLanguageArgs = {
  input: Array<AddLanguageInput>;
};


export type MutationUpdateLanguageArgs = {
  input: UpdateLanguageInput;
};


export type MutationDeleteLanguageArgs = {
  filter: LanguageFilter;
};


export type MutationAddReferenceArgs = {
  input: Array<AddReferenceInput>;
};


export type MutationUpdateReferenceArgs = {
  input: UpdateReferenceInput;
};


export type MutationDeleteReferenceArgs = {
  filter: ReferenceFilter;
};


export type MutationAddScriptArgs = {
  input: Array<AddScriptInput>;
};


export type MutationUpdateScriptArgs = {
  input: UpdateScriptInput;
};


export type MutationDeleteScriptArgs = {
  filter: ScriptFilter;
};


export type MutationAddStoryArgs = {
  input: Array<AddStoryInput>;
};


export type MutationUpdateStoryArgs = {
  input: UpdateStoryInput;
};


export type MutationDeleteStoryArgs = {
  filter: StoryFilter;
};


export type MutationAddStoryLineArgs = {
  input: Array<AddStoryLineInput>;
};


export type MutationUpdateStoryLineArgs = {
  input: UpdateStoryLineInput;
};


export type MutationDeleteStoryLineArgs = {
  filter: StoryLineFilter;
};


export type MutationAddTagArgs = {
  input: Array<AddTagInput>;
};


export type MutationUpdateTagArgs = {
  input: UpdateTagInput;
};


export type MutationDeleteTagArgs = {
  filter: TagFilter;
};


export type MutationAddTransliterationArgs = {
  input: Array<AddTransliterationInput>;
};


export type MutationUpdateTransliterationArgs = {
  input: UpdateTransliterationInput;
};


export type MutationDeleteTransliterationArgs = {
  filter: TransliterationFilter;
};

export enum HttpMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Patch = 'PATCH',
  Delete = 'DELETE'
}

export enum AlphabetHasFilter {
  Code = 'code',
  Names = 'names',
  Script = 'script',
  Characters = 'characters',
  References = 'references'
}

export enum ExpressionOrderable {
  Uuid = 'uuid'
}

export type AddExpressionInput = {
  uuid: Scalars['String'];
  type: ExpressionType;
  titles: Array<TransliterationRef>;
  languages: Array<LanguageRef>;
  partOfSpeech?: Maybe<PartOfSpeech>;
  nounType?: Maybe<NounType>;
  lexeme?: Maybe<ExpressionRef>;
  literalTranslations: Array<TransliterationRef>;
  practicalTranslations: Array<TransliterationRef>;
  meanings: Array<TransliterationRef>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  relatedExpressions?: Maybe<Array<Maybe<ExpressionRef>>>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export enum NounType {
  Name = 'Name',
  Place = 'Place',
  Person = 'Person'
}

export type StringRegExpFilter = {
  regexp?: Maybe<Scalars['String']>;
};

export type PolygonRef = {
  coordinates: Array<PointListRef>;
};

export type AddExpressionPayload = {
  __typename?: 'AddExpressionPayload';
  expression?: Maybe<Array<Maybe<Expression>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddExpressionPayloadExpressionArgs = {
  filter?: Maybe<ExpressionFilter>;
  order?: Maybe<ExpressionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateLanguagePayload = {
  __typename?: 'UpdateLanguagePayload';
  language?: Maybe<Array<Maybe<Language>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateLanguagePayloadLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
  order?: Maybe<LanguageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddReferenceInput = {
  type: ReferenceType;
  mla?: Maybe<Scalars['String']>;
};

export type ScriptFilter = {
  code?: Maybe<StringHashFilter>;
  has?: Maybe<ScriptHasFilter>;
  and?: Maybe<Array<Maybe<ScriptFilter>>>;
  or?: Maybe<Array<Maybe<ScriptFilter>>>;
  not?: Maybe<ScriptFilter>;
};

export type TagPatch = {
  name?: Maybe<Scalars['String']>;
};

export enum PartOfSpeech {
  Adjective = 'Adjective',
  Adverb = 'Adverb',
  Conjunction = 'Conjunction',
  Interjection = 'Interjection',
  Noun = 'Noun',
  Preposition = 'Preposition',
  Pronoun = 'Pronoun',
  Verb = 'Verb',
  Prefix = 'Prefix',
  Suffix = 'Suffix'
}

export type Tag = {
  __typename?: 'Tag';
  name: Scalars['String'];
};

export type UpdateTagInput = {
  filter: TagFilter;
  set?: Maybe<TagPatch>;
  remove?: Maybe<TagPatch>;
};

export type TransliterationPatch = {
  value?: Maybe<Scalars['String']>;
  langCode?: Maybe<Scalars['String']>;
  scriptCode?: Maybe<Scalars['String']>;
};

export type UpdateStoryLineInput = {
  filter: StoryLineFilter;
  set?: Maybe<StoryLinePatch>;
  remove?: Maybe<StoryLinePatch>;
};

export type AddTransliterationPayload = {
  __typename?: 'AddTransliterationPayload';
  transliteration?: Maybe<Array<Maybe<Transliteration>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddTransliterationPayloadTransliterationArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum TransliterationHasFilter {
  Hash = 'hash',
  Value = 'value',
  LangCode = 'langCode',
  ScriptCode = 'scriptCode'
}

export type Culture = {
  __typename?: 'Culture';
  endonym: Scalars['String'];
  exonyms: Array<Transliteration>;
  exonymsAggregate?: Maybe<TransliterationAggregateResult>;
};


export type CultureExonymsArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type CultureExonymsAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};

export type AddReferencePayload = {
  __typename?: 'AddReferencePayload';
  reference?: Maybe<Array<Maybe<Reference>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddReferencePayloadReferenceArgs = {
  filter?: Maybe<ReferenceFilter>;
  order?: Maybe<ReferenceOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddScriptPayload = {
  __typename?: 'AddScriptPayload';
  script?: Maybe<Array<Maybe<Script>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddScriptPayloadScriptArgs = {
  filter?: Maybe<ScriptFilter>;
  order?: Maybe<ScriptOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum LanguageOrderable {
  Code = 'code',
  GlottologId = 'glottologId'
}

export type TransliterationOrder = {
  asc?: Maybe<TransliterationOrderable>;
  desc?: Maybe<TransliterationOrderable>;
  then?: Maybe<TransliterationOrder>;
};

export type TransliterationRef = {
  hash?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  langCode?: Maybe<Scalars['String']>;
  scriptCode?: Maybe<Scalars['String']>;
};

export type DateTimeRange = {
  min: Scalars['DateTime'];
  max: Scalars['DateTime'];
};

export type MultiPolygonRef = {
  polygons: Array<PolygonRef>;
};

export type MultiPolygon = {
  __typename?: 'MultiPolygon';
  polygons: Array<Polygon>;
};

export type IntersectsFilter = {
  polygon?: Maybe<PolygonRef>;
  multiPolygon?: Maybe<MultiPolygonRef>;
};

export type DateTimeFilter = {
  eq?: Maybe<Scalars['DateTime']>;
  le?: Maybe<Scalars['DateTime']>;
  lt?: Maybe<Scalars['DateTime']>;
  ge?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  between?: Maybe<DateTimeRange>;
};

export type AddLanguagePayload = {
  __typename?: 'AddLanguagePayload';
  language?: Maybe<Array<Maybe<Language>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddLanguagePayloadLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
  order?: Maybe<LanguageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TransliterationAggregateResult = {
  __typename?: 'TransliterationAggregateResult';
  count?: Maybe<Scalars['Int']>;
  hashMin?: Maybe<Scalars['String']>;
  hashMax?: Maybe<Scalars['String']>;
  valueMin?: Maybe<Scalars['String']>;
  valueMax?: Maybe<Scalars['String']>;
  langCodeMin?: Maybe<Scalars['String']>;
  langCodeMax?: Maybe<Scalars['String']>;
  scriptCodeMin?: Maybe<Scalars['String']>;
  scriptCodeMax?: Maybe<Scalars['String']>;
};

export type TagFilter = {
  has?: Maybe<TagHasFilter>;
  and?: Maybe<Array<Maybe<TagFilter>>>;
  or?: Maybe<Array<Maybe<TagFilter>>>;
  not?: Maybe<TagFilter>;
};

export type StringRange = {
  min: Scalars['String'];
  max: Scalars['String'];
};

export type CustomHttp = {
  url: Scalars['String'];
  method: HttpMethod;
  body?: Maybe<Scalars['String']>;
  graphql?: Maybe<Scalars['String']>;
  mode?: Maybe<Mode>;
  forwardHeaders?: Maybe<Array<Scalars['String']>>;
  secretHeaders?: Maybe<Array<Scalars['String']>>;
  introspectionHeaders?: Maybe<Array<Scalars['String']>>;
  skipIntrospection?: Maybe<Scalars['Boolean']>;
};

export type UpdateScriptInput = {
  filter: ScriptFilter;
  set?: Maybe<ScriptPatch>;
  remove?: Maybe<ScriptPatch>;
};

export type ExpressionFilter = {
  uuid?: Maybe<StringHashFilter>;
  has?: Maybe<ExpressionHasFilter>;
  and?: Maybe<Array<Maybe<ExpressionFilter>>>;
  or?: Maybe<Array<Maybe<ExpressionFilter>>>;
  not?: Maybe<ExpressionFilter>;
};

export type ReferenceRef = {
  type?: Maybe<ReferenceType>;
  mla?: Maybe<Scalars['String']>;
};

export type UpdateCultureInput = {
  filter: CultureFilter;
  set?: Maybe<CulturePatch>;
  remove?: Maybe<CulturePatch>;
};

export type UpdateStoryLinePayload = {
  __typename?: 'UpdateStoryLinePayload';
  storyLine?: Maybe<Array<Maybe<StoryLine>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateStoryLinePayloadStoryLineArgs = {
  filter?: Maybe<StoryLineFilter>;
  order?: Maybe<StoryLineOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum LanguageHasFilter {
  Code = 'code',
  Names = 'names',
  Parent = 'parent',
  Lexifier = 'lexifier',
  RelatedLanguages = 'relatedLanguages',
  GlottologId = 'glottologId',
  Alphabets = 'alphabets',
  IsFamily = 'isFamily',
  References = 'references'
}

export type AlphabetPatch = {
  names?: Maybe<Array<TransliterationRef>>;
  script?: Maybe<ScriptRef>;
  characters?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type ReferenceFilter = {
  has?: Maybe<ReferenceHasFilter>;
  and?: Maybe<Array<Maybe<ReferenceFilter>>>;
  or?: Maybe<Array<Maybe<ReferenceFilter>>>;
  not?: Maybe<ReferenceFilter>;
};

export type ScriptRef = {
  code?: Maybe<Scalars['String']>;
  names?: Maybe<Array<Maybe<TransliterationRef>>>;
};

export type StoryLineFilter = {
  has?: Maybe<StoryLineHasFilter>;
  and?: Maybe<Array<Maybe<StoryLineFilter>>>;
  or?: Maybe<Array<Maybe<StoryLineFilter>>>;
  not?: Maybe<StoryLineFilter>;
};

export type UpdateExpressionPayload = {
  __typename?: 'UpdateExpressionPayload';
  expression?: Maybe<Array<Maybe<Expression>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateExpressionPayloadExpressionArgs = {
  filter?: Maybe<ExpressionFilter>;
  order?: Maybe<ExpressionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type AddCultureInput = {
  endonym: Scalars['String'];
  exonyms: Array<TransliterationRef>;
};

export type AddAlphabetInput = {
  code: Scalars['String'];
  names: Array<TransliterationRef>;
  script?: Maybe<ScriptRef>;
  characters?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type ExpressionPatch = {
  type?: Maybe<ExpressionType>;
  titles?: Maybe<Array<TransliterationRef>>;
  languages?: Maybe<Array<LanguageRef>>;
  partOfSpeech?: Maybe<PartOfSpeech>;
  nounType?: Maybe<NounType>;
  lexeme?: Maybe<ExpressionRef>;
  literalTranslations?: Maybe<Array<TransliterationRef>>;
  practicalTranslations?: Maybe<Array<TransliterationRef>>;
  meanings?: Maybe<Array<TransliterationRef>>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  relatedExpressions?: Maybe<Array<Maybe<ExpressionRef>>>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type LanguageRef = {
  code?: Maybe<Scalars['String']>;
  names?: Maybe<Array<TransliterationRef>>;
  parent?: Maybe<LanguageRef>;
  lexifier?: Maybe<LanguageRef>;
  relatedLanguages?: Maybe<Array<Maybe<LanguageRef>>>;
  glottologId?: Maybe<Scalars['String']>;
  alphabets?: Maybe<Array<Maybe<AlphabetRef>>>;
  isFamily?: Maybe<Scalars['Boolean']>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type StoryRef = {
  type?: Maybe<StoryType>;
  lines?: Maybe<Array<Maybe<StoryLineRef>>>;
  language?: Maybe<LanguageRef>;
  script?: Maybe<ScriptRef>;
};

export type Script = {
  __typename?: 'Script';
  code: Scalars['String'];
  names?: Maybe<Array<Maybe<Transliteration>>>;
  namesAggregate?: Maybe<TransliterationAggregateResult>;
};


export type ScriptNamesArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ScriptNamesAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};

export type Int64Range = {
  min: Scalars['Int64'];
  max: Scalars['Int64'];
};

export type AddCulturePayload = {
  __typename?: 'AddCulturePayload';
  culture?: Maybe<Array<Maybe<Culture>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddCulturePayloadCultureArgs = {
  filter?: Maybe<CultureFilter>;
  order?: Maybe<CultureOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type LanguageAggregateResult = {
  __typename?: 'LanguageAggregateResult';
  count?: Maybe<Scalars['Int']>;
  codeMin?: Maybe<Scalars['String']>;
  codeMax?: Maybe<Scalars['String']>;
  glottologIdMin?: Maybe<Scalars['String']>;
  glottologIdMax?: Maybe<Scalars['String']>;
};

export enum StoryLineOrderable {
  Content = 'content'
}

export type GenerateMutationParams = {
  add?: Maybe<Scalars['Boolean']>;
  update?: Maybe<Scalars['Boolean']>;
  delete?: Maybe<Scalars['Boolean']>;
};

export type PointList = {
  __typename?: 'PointList';
  points: Array<Point>;
};

export type StringTermFilter = {
  allofterms?: Maybe<Scalars['String']>;
  anyofterms?: Maybe<Scalars['String']>;
};

export type TagAggregateResult = {
  __typename?: 'TagAggregateResult';
  count?: Maybe<Scalars['Int']>;
  nameMin?: Maybe<Scalars['String']>;
  nameMax?: Maybe<Scalars['String']>;
};

export type UpdateScriptPayload = {
  __typename?: 'UpdateScriptPayload';
  script?: Maybe<Array<Maybe<Script>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateScriptPayloadScriptArgs = {
  filter?: Maybe<ScriptFilter>;
  order?: Maybe<ScriptOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Story = {
  __typename?: 'Story';
  type: StoryType;
  lines: Array<Maybe<StoryLine>>;
  language?: Maybe<Language>;
  script?: Maybe<Script>;
  linesAggregate?: Maybe<StoryLineAggregateResult>;
};


export type StoryLinesArgs = {
  filter?: Maybe<StoryLineFilter>;
  order?: Maybe<StoryLineOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type StoryLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
};


export type StoryScriptArgs = {
  filter?: Maybe<ScriptFilter>;
};


export type StoryLinesAggregateArgs = {
  filter?: Maybe<StoryLineFilter>;
};

export type StoryLine = {
  __typename?: 'StoryLine';
  story: Story;
  content: Scalars['String'];
};


export type StoryLineStoryArgs = {
  filter?: Maybe<StoryFilter>;
};

export type GenerateQueryParams = {
  get?: Maybe<Scalars['Boolean']>;
  query?: Maybe<Scalars['Boolean']>;
  password?: Maybe<Scalars['Boolean']>;
  aggregate?: Maybe<Scalars['Boolean']>;
};

export type AddStoryLinePayload = {
  __typename?: 'AddStoryLinePayload';
  storyLine?: Maybe<Array<Maybe<StoryLine>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddStoryLinePayloadStoryLineArgs = {
  filter?: Maybe<StoryLineFilter>;
  order?: Maybe<StoryLineOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ReferenceAggregateResult = {
  __typename?: 'ReferenceAggregateResult';
  count?: Maybe<Scalars['Int']>;
  mlaMin?: Maybe<Scalars['String']>;
  mlaMax?: Maybe<Scalars['String']>;
};

export enum CultureHasFilter {
  Endonym = 'endonym',
  Exonyms = 'exonyms'
}

export type PointListRef = {
  points: Array<PointRef>;
};

export type ExpressionOrder = {
  asc?: Maybe<ExpressionOrderable>;
  desc?: Maybe<ExpressionOrderable>;
  then?: Maybe<ExpressionOrder>;
};

export type ExpressionRef = {
  uuid?: Maybe<Scalars['String']>;
  type?: Maybe<ExpressionType>;
  titles?: Maybe<Array<TransliterationRef>>;
  languages?: Maybe<Array<LanguageRef>>;
  partOfSpeech?: Maybe<PartOfSpeech>;
  nounType?: Maybe<NounType>;
  lexeme?: Maybe<ExpressionRef>;
  literalTranslations?: Maybe<Array<TransliterationRef>>;
  practicalTranslations?: Maybe<Array<TransliterationRef>>;
  meanings?: Maybe<Array<TransliterationRef>>;
  tags?: Maybe<Array<Maybe<TagRef>>>;
  relatedExpressions?: Maybe<Array<Maybe<ExpressionRef>>>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type LanguagePatch = {
  names?: Maybe<Array<TransliterationRef>>;
  parent?: Maybe<LanguageRef>;
  lexifier?: Maybe<LanguageRef>;
  relatedLanguages?: Maybe<Array<Maybe<LanguageRef>>>;
  glottologId?: Maybe<Scalars['String']>;
  alphabets?: Maybe<Array<Maybe<AlphabetRef>>>;
  isFamily?: Maybe<Scalars['Boolean']>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type ScriptOrder = {
  asc?: Maybe<ScriptOrderable>;
  desc?: Maybe<ScriptOrderable>;
  then?: Maybe<ScriptOrder>;
};

export enum TransliterationOrderable {
  Hash = 'hash',
  Value = 'value',
  LangCode = 'langCode',
  ScriptCode = 'scriptCode'
}

export type DeleteAlphabetPayload = {
  __typename?: 'DeleteAlphabetPayload';
  alphabet?: Maybe<Array<Maybe<Alphabet>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteAlphabetPayloadAlphabetArgs = {
  filter?: Maybe<AlphabetFilter>;
  order?: Maybe<AlphabetOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type LanguageOrder = {
  asc?: Maybe<LanguageOrderable>;
  desc?: Maybe<LanguageOrderable>;
  then?: Maybe<LanguageOrder>;
};

export type Polygon = {
  __typename?: 'Polygon';
  coordinates: Array<PointList>;
};

export type NearFilter = {
  distance: Scalars['Float'];
  coordinate: PointRef;
};

export type StringFullTextFilter = {
  alloftext?: Maybe<Scalars['String']>;
  anyoftext?: Maybe<Scalars['String']>;
};

export type CultureAggregateResult = {
  __typename?: 'CultureAggregateResult';
  count?: Maybe<Scalars['Int']>;
  endonymMin?: Maybe<Scalars['String']>;
  endonymMax?: Maybe<Scalars['String']>;
};

export type UpdateAlphabetPayload = {
  __typename?: 'UpdateAlphabetPayload';
  alphabet?: Maybe<Array<Maybe<Alphabet>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateAlphabetPayloadAlphabetArgs = {
  filter?: Maybe<AlphabetFilter>;
  order?: Maybe<AlphabetOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ReferenceHasFilter {
  Type = 'type',
  Mla = 'mla'
}

export enum ReferenceOrderable {
  Mla = 'mla'
}

export type AddStoryInput = {
  type: StoryType;
  lines: Array<Maybe<StoryLineRef>>;
  language?: Maybe<LanguageRef>;
  script?: Maybe<ScriptRef>;
};

export type StoryPatch = {
  type?: Maybe<StoryType>;
  lines?: Maybe<Array<Maybe<StoryLineRef>>>;
  language?: Maybe<LanguageRef>;
  script?: Maybe<ScriptRef>;
};

export type DeleteExpressionPayload = {
  __typename?: 'DeleteExpressionPayload';
  expression?: Maybe<Array<Maybe<Expression>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteExpressionPayloadExpressionArgs = {
  filter?: Maybe<ExpressionFilter>;
  order?: Maybe<ExpressionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type StoryAggregateResult = {
  __typename?: 'StoryAggregateResult';
  count?: Maybe<Scalars['Int']>;
};

export enum ScriptHasFilter {
  Code = 'code',
  Names = 'names'
}

export enum TagOrderable {
  Name = 'name'
}

export type StoryLineRef = {
  story?: Maybe<StoryRef>;
  content?: Maybe<Scalars['String']>;
};

export type Point = {
  __typename?: 'Point';
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type StoryLineAggregateResult = {
  __typename?: 'StoryLineAggregateResult';
  count?: Maybe<Scalars['Int']>;
  contentMin?: Maybe<Scalars['String']>;
  contentMax?: Maybe<Scalars['String']>;
};

export enum TagHasFilter {
  Name = 'name'
}

export type AlphabetRef = {
  code?: Maybe<Scalars['String']>;
  names?: Maybe<Array<TransliterationRef>>;
  script?: Maybe<ScriptRef>;
  characters?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<ReferenceRef>>>;
};

export type UpdateAlphabetInput = {
  filter: AlphabetFilter;
  set?: Maybe<AlphabetPatch>;
  remove?: Maybe<AlphabetPatch>;
};

export type StringHashFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type CulturePatch = {
  endonym?: Maybe<Scalars['String']>;
  exonyms?: Maybe<Array<TransliterationRef>>;
};

export enum ExpressionType {
  Expression = 'Expression',
  Phrase = 'Phrase',
  Proverb = 'Proverb',
  Word = 'Word'
}

export type AddTransliterationInput = {
  hash: Scalars['String'];
  value: Scalars['String'];
  langCode?: Maybe<Scalars['String']>;
  scriptCode?: Maybe<Scalars['String']>;
};

export enum CultureOrderable {
  Endonym = 'endonym'
}

export type CultureRef = {
  endonym?: Maybe<Scalars['String']>;
  exonyms?: Maybe<Array<TransliterationRef>>;
};

export type FloatRange = {
  min: Scalars['Float'];
  max: Scalars['Float'];
};

export type ReferencePatch = {
  type?: Maybe<ReferenceType>;
  mla?: Maybe<Scalars['String']>;
};

export type UpdateLanguageInput = {
  filter: LanguageFilter;
  set?: Maybe<LanguagePatch>;
  remove?: Maybe<LanguagePatch>;
};

export enum StoryType {
  Poem = 'Poem',
  Song = 'Song',
  Story = 'Story'
}

export type DeleteLanguagePayload = {
  __typename?: 'DeleteLanguagePayload';
  language?: Maybe<Array<Maybe<Language>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteLanguagePayloadLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
  order?: Maybe<LanguageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateTransliterationInput = {
  filter: TransliterationFilter;
  set?: Maybe<TransliterationPatch>;
  remove?: Maybe<TransliterationPatch>;
};

export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum AlphabetOrderable {
  Code = 'code',
  Characters = 'characters'
}

export type AuthRule = {
  and?: Maybe<Array<Maybe<AuthRule>>>;
  or?: Maybe<Array<Maybe<AuthRule>>>;
  not?: Maybe<AuthRule>;
  rule?: Maybe<Scalars['String']>;
};

export type PolygonGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
  contains?: Maybe<ContainsFilter>;
  intersects?: Maybe<IntersectsFilter>;
};

export type IntFilter = {
  eq?: Maybe<Scalars['Int']>;
  le?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  ge?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  between?: Maybe<IntRange>;
};

export type FloatFilter = {
  eq?: Maybe<Scalars['Float']>;
  le?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  ge?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  between?: Maybe<FloatRange>;
};

export type DeleteStoryLinePayload = {
  __typename?: 'DeleteStoryLinePayload';
  storyLine?: Maybe<Array<Maybe<StoryLine>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteStoryLinePayloadStoryLineArgs = {
  filter?: Maybe<StoryLineFilter>;
  order?: Maybe<StoryLineOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateCulturePayload = {
  __typename?: 'UpdateCulturePayload';
  culture?: Maybe<Array<Maybe<Culture>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateCulturePayloadCultureArgs = {
  filter?: Maybe<CultureFilter>;
  order?: Maybe<CultureOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ReferenceType {
  Article = 'Article',
  Audio = 'Audio',
  Book = 'Book',
  Encyclopedia = 'Encyclopedia',
  Film = 'Film',
  Interview = 'Interview',
  Paper = 'Paper',
  Person = 'Person',
  Report = 'Report',
  SocialMedia = 'SocialMedia',
  Song = 'Song',
  Video = 'Video',
  Website = 'Website',
  Other = 'Other'
}

export type Alphabet = {
  __typename?: 'Alphabet';
  code: Scalars['String'];
  names: Array<Transliteration>;
  script?: Maybe<Script>;
  characters?: Maybe<Scalars['String']>;
  references?: Maybe<Array<Maybe<Reference>>>;
  namesAggregate?: Maybe<TransliterationAggregateResult>;
  referencesAggregate?: Maybe<ReferenceAggregateResult>;
};


export type AlphabetNamesArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AlphabetScriptArgs = {
  filter?: Maybe<ScriptFilter>;
};


export type AlphabetReferencesArgs = {
  filter?: Maybe<ReferenceFilter>;
  order?: Maybe<ReferenceOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type AlphabetNamesAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};


export type AlphabetReferencesAggregateArgs = {
  filter?: Maybe<ReferenceFilter>;
};

export type StoryLinePatch = {
  story?: Maybe<StoryRef>;
  content?: Maybe<Scalars['String']>;
};

export type AddTagInput = {
  name: Scalars['String'];
};

export type ReferenceOrder = {
  asc?: Maybe<ReferenceOrderable>;
  desc?: Maybe<ReferenceOrderable>;
  then?: Maybe<ReferenceOrder>;
};

export type TagOrder = {
  asc?: Maybe<TagOrderable>;
  desc?: Maybe<TagOrderable>;
  then?: Maybe<TagOrder>;
};


export type DeleteCulturePayload = {
  __typename?: 'DeleteCulturePayload';
  culture?: Maybe<Array<Maybe<Culture>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteCulturePayloadCultureArgs = {
  filter?: Maybe<CultureFilter>;
  order?: Maybe<CultureOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type TagRef = {
  name?: Maybe<Scalars['String']>;
};

export type IntRange = {
  min: Scalars['Int'];
  max: Scalars['Int'];
};

export enum Mode {
  Batch = 'BATCH',
  Single = 'SINGLE'
}

export type AddAlphabetPayload = {
  __typename?: 'AddAlphabetPayload';
  alphabet?: Maybe<Array<Maybe<Alphabet>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddAlphabetPayloadAlphabetArgs = {
  filter?: Maybe<AlphabetFilter>;
  order?: Maybe<AlphabetOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type DeleteTransliterationPayload = {
  __typename?: 'DeleteTransliterationPayload';
  transliteration?: Maybe<Array<Maybe<Transliteration>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteTransliterationPayloadTransliterationArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum StoryHasFilter {
  Type = 'type',
  Lines = 'lines',
  Language = 'language',
  Script = 'script'
}

export type Language = {
  __typename?: 'Language';
  code: Scalars['String'];
  names: Array<Transliteration>;
  parent?: Maybe<Language>;
  lexifier?: Maybe<Language>;
  relatedLanguages?: Maybe<Array<Maybe<Language>>>;
  glottologId?: Maybe<Scalars['String']>;
  alphabets?: Maybe<Array<Maybe<Alphabet>>>;
  isFamily?: Maybe<Scalars['Boolean']>;
  references?: Maybe<Array<Maybe<Reference>>>;
  namesAggregate?: Maybe<TransliterationAggregateResult>;
  relatedLanguagesAggregate?: Maybe<LanguageAggregateResult>;
  alphabetsAggregate?: Maybe<AlphabetAggregateResult>;
  referencesAggregate?: Maybe<ReferenceAggregateResult>;
};


export type LanguageNamesArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type LanguageParentArgs = {
  filter?: Maybe<LanguageFilter>;
};


export type LanguageLexifierArgs = {
  filter?: Maybe<LanguageFilter>;
};


export type LanguageRelatedLanguagesArgs = {
  filter?: Maybe<LanguageFilter>;
  order?: Maybe<LanguageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type LanguageAlphabetsArgs = {
  filter?: Maybe<AlphabetFilter>;
  order?: Maybe<AlphabetOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type LanguageReferencesArgs = {
  filter?: Maybe<ReferenceFilter>;
  order?: Maybe<ReferenceOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type LanguageNamesAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};


export type LanguageRelatedLanguagesAggregateArgs = {
  filter?: Maybe<LanguageFilter>;
};


export type LanguageAlphabetsAggregateArgs = {
  filter?: Maybe<AlphabetFilter>;
};


export type LanguageReferencesAggregateArgs = {
  filter?: Maybe<ReferenceFilter>;
};

export type DeleteReferencePayload = {
  __typename?: 'DeleteReferencePayload';
  reference?: Maybe<Array<Maybe<Reference>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteReferencePayloadReferenceArgs = {
  filter?: Maybe<ReferenceFilter>;
  order?: Maybe<ReferenceOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ExpressionAggregateResult = {
  __typename?: 'ExpressionAggregateResult';
  count?: Maybe<Scalars['Int']>;
  uuidMin?: Maybe<Scalars['String']>;
  uuidMax?: Maybe<Scalars['String']>;
};

export type UpdateReferencePayload = {
  __typename?: 'UpdateReferencePayload';
  reference?: Maybe<Array<Maybe<Reference>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateReferencePayloadReferenceArgs = {
  filter?: Maybe<ReferenceFilter>;
  order?: Maybe<ReferenceOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ContainsFilter = {
  point?: Maybe<PointRef>;
  polygon?: Maybe<PolygonRef>;
};

export type AddTagPayload = {
  __typename?: 'AddTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type PointRef = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload';
  tag?: Maybe<Array<Maybe<Tag>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteTagPayloadTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type Int64Filter = {
  eq?: Maybe<Scalars['Int64']>;
  le?: Maybe<Scalars['Int64']>;
  lt?: Maybe<Scalars['Int64']>;
  ge?: Maybe<Scalars['Int64']>;
  gt?: Maybe<Scalars['Int64']>;
  between?: Maybe<Int64Range>;
};

export type DeleteScriptPayload = {
  __typename?: 'DeleteScriptPayload';
  script?: Maybe<Array<Maybe<Script>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteScriptPayloadScriptArgs = {
  filter?: Maybe<ScriptFilter>;
  order?: Maybe<ScriptOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ScriptOrderable {
  Code = 'code'
}

export type AddScriptInput = {
  code: Scalars['String'];
  names?: Maybe<Array<Maybe<TransliterationRef>>>;
};

export type AlphabetOrder = {
  asc?: Maybe<AlphabetOrderable>;
  desc?: Maybe<AlphabetOrderable>;
  then?: Maybe<AlphabetOrder>;
};

export type CultureFilter = {
  has?: Maybe<CultureHasFilter>;
  and?: Maybe<Array<Maybe<CultureFilter>>>;
  or?: Maybe<Array<Maybe<CultureFilter>>>;
  not?: Maybe<CultureFilter>;
};

export type Reference = {
  __typename?: 'Reference';
  type: ReferenceType;
  mla?: Maybe<Scalars['String']>;
};

export type WithinFilter = {
  polygon: PolygonRef;
};

export type LanguageFilter = {
  code?: Maybe<StringHashFilter>;
  has?: Maybe<LanguageHasFilter>;
  and?: Maybe<Array<Maybe<LanguageFilter>>>;
  or?: Maybe<Array<Maybe<LanguageFilter>>>;
  not?: Maybe<LanguageFilter>;
};

export type Query = {
  __typename?: 'Query';
  getAlphabet?: Maybe<Alphabet>;
  queryAlphabet?: Maybe<Array<Maybe<Alphabet>>>;
  aggregateAlphabet?: Maybe<AlphabetAggregateResult>;
  queryCulture?: Maybe<Array<Maybe<Culture>>>;
  aggregateCulture?: Maybe<CultureAggregateResult>;
  getExpression?: Maybe<Expression>;
  queryExpression?: Maybe<Array<Maybe<Expression>>>;
  aggregateExpression?: Maybe<ExpressionAggregateResult>;
  getLanguage?: Maybe<Language>;
  queryLanguage?: Maybe<Array<Maybe<Language>>>;
  aggregateLanguage?: Maybe<LanguageAggregateResult>;
  queryReference?: Maybe<Array<Maybe<Reference>>>;
  aggregateReference?: Maybe<ReferenceAggregateResult>;
  getScript?: Maybe<Script>;
  queryScript?: Maybe<Array<Maybe<Script>>>;
  aggregateScript?: Maybe<ScriptAggregateResult>;
  queryStory?: Maybe<Array<Maybe<Story>>>;
  aggregateStory?: Maybe<StoryAggregateResult>;
  queryStoryLine?: Maybe<Array<Maybe<StoryLine>>>;
  aggregateStoryLine?: Maybe<StoryLineAggregateResult>;
  queryTag?: Maybe<Array<Maybe<Tag>>>;
  aggregateTag?: Maybe<TagAggregateResult>;
  getTransliteration?: Maybe<Transliteration>;
  queryTransliteration?: Maybe<Array<Maybe<Transliteration>>>;
  aggregateTransliteration?: Maybe<TransliterationAggregateResult>;
};


export type QueryGetAlphabetArgs = {
  code: Scalars['String'];
};


export type QueryQueryAlphabetArgs = {
  filter?: Maybe<AlphabetFilter>;
  order?: Maybe<AlphabetOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateAlphabetArgs = {
  filter?: Maybe<AlphabetFilter>;
};


export type QueryQueryCultureArgs = {
  filter?: Maybe<CultureFilter>;
  order?: Maybe<CultureOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateCultureArgs = {
  filter?: Maybe<CultureFilter>;
};


export type QueryGetExpressionArgs = {
  uuid: Scalars['String'];
};


export type QueryQueryExpressionArgs = {
  filter?: Maybe<ExpressionFilter>;
  order?: Maybe<ExpressionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateExpressionArgs = {
  filter?: Maybe<ExpressionFilter>;
};


export type QueryGetLanguageArgs = {
  code: Scalars['String'];
};


export type QueryQueryLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
  order?: Maybe<LanguageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateLanguageArgs = {
  filter?: Maybe<LanguageFilter>;
};


export type QueryQueryReferenceArgs = {
  filter?: Maybe<ReferenceFilter>;
  order?: Maybe<ReferenceOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateReferenceArgs = {
  filter?: Maybe<ReferenceFilter>;
};


export type QueryGetScriptArgs = {
  code: Scalars['String'];
};


export type QueryQueryScriptArgs = {
  filter?: Maybe<ScriptFilter>;
  order?: Maybe<ScriptOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateScriptArgs = {
  filter?: Maybe<ScriptFilter>;
};


export type QueryQueryStoryArgs = {
  filter?: Maybe<StoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateStoryArgs = {
  filter?: Maybe<StoryFilter>;
};


export type QueryQueryStoryLineArgs = {
  filter?: Maybe<StoryLineFilter>;
  order?: Maybe<StoryLineOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateStoryLineArgs = {
  filter?: Maybe<StoryLineFilter>;
};


export type QueryQueryTagArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateTagArgs = {
  filter?: Maybe<TagFilter>;
};


export type QueryGetTransliterationArgs = {
  hash: Scalars['String'];
};


export type QueryQueryTransliterationArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryAggregateTransliterationArgs = {
  filter?: Maybe<TransliterationFilter>;
};

export type AddStoryPayload = {
  __typename?: 'AddStoryPayload';
  story?: Maybe<Array<Maybe<Story>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type AddStoryPayloadStoryArgs = {
  filter?: Maybe<StoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type StoryLineOrder = {
  asc?: Maybe<StoryLineOrderable>;
  desc?: Maybe<StoryLineOrderable>;
  then?: Maybe<StoryLineOrder>;
};

export type Transliteration = {
  __typename?: 'Transliteration';
  hash: Scalars['String'];
  value: Scalars['String'];
  langCode?: Maybe<Scalars['String']>;
  scriptCode?: Maybe<Scalars['String']>;
};


export type UpdateStoryPayload = {
  __typename?: 'UpdateStoryPayload';
  story?: Maybe<Array<Maybe<Story>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateStoryPayloadStoryArgs = {
  filter?: Maybe<StoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type UpdateTransliterationPayload = {
  __typename?: 'UpdateTransliterationPayload';
  transliteration?: Maybe<Array<Maybe<Transliteration>>>;
  numUids?: Maybe<Scalars['Int']>;
};


export type UpdateTransliterationPayloadTransliterationArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export enum ExpressionHasFilter {
  Uuid = 'uuid',
  Type = 'type',
  Titles = 'titles',
  Languages = 'languages',
  PartOfSpeech = 'partOfSpeech',
  NounType = 'nounType',
  Lexeme = 'lexeme',
  LiteralTranslations = 'literalTranslations',
  PracticalTranslations = 'practicalTranslations',
  Meanings = 'meanings',
  Tags = 'tags',
  RelatedExpressions = 'relatedExpressions',
  References = 'references'
}

export enum StoryLineHasFilter {
  Story = 'story',
  Content = 'content'
}

export type UpdateExpressionInput = {
  filter: ExpressionFilter;
  set?: Maybe<ExpressionPatch>;
  remove?: Maybe<ExpressionPatch>;
};

export type UpdateStoryInput = {
  filter: StoryFilter;
  set?: Maybe<StoryPatch>;
  remove?: Maybe<StoryPatch>;
};

export type StringExactFilter = {
  eq?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  le?: Maybe<Scalars['String']>;
  lt?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  between?: Maybe<StringRange>;
};

export type PointGeoFilter = {
  near?: Maybe<NearFilter>;
  within?: Maybe<WithinFilter>;
};

export type DeleteStoryPayload = {
  __typename?: 'DeleteStoryPayload';
  story?: Maybe<Array<Maybe<Story>>>;
  msg?: Maybe<Scalars['String']>;
  numUids?: Maybe<Scalars['Int']>;
};


export type DeleteStoryPayloadStoryArgs = {
  filter?: Maybe<StoryFilter>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};

export type ScriptAggregateResult = {
  __typename?: 'ScriptAggregateResult';
  count?: Maybe<Scalars['Int']>;
  codeMin?: Maybe<Scalars['String']>;
  codeMax?: Maybe<Scalars['String']>;
};

export type StoryFilter = {
  has?: Maybe<StoryHasFilter>;
  and?: Maybe<Array<Maybe<StoryFilter>>>;
  or?: Maybe<Array<Maybe<StoryFilter>>>;
  not?: Maybe<StoryFilter>;
};

export type Expression = {
  __typename?: 'Expression';
  uuid: Scalars['String'];
  type: ExpressionType;
  titles: Array<Transliteration>;
  languages: Array<Language>;
  partOfSpeech?: Maybe<PartOfSpeech>;
  nounType?: Maybe<NounType>;
  lexeme?: Maybe<Expression>;
  literalTranslations: Array<Transliteration>;
  practicalTranslations: Array<Transliteration>;
  meanings: Array<Transliteration>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  relatedExpressions?: Maybe<Array<Maybe<Expression>>>;
  references?: Maybe<Array<Maybe<Reference>>>;
  titlesAggregate?: Maybe<TransliterationAggregateResult>;
  languagesAggregate?: Maybe<LanguageAggregateResult>;
  literalTranslationsAggregate?: Maybe<TransliterationAggregateResult>;
  practicalTranslationsAggregate?: Maybe<TransliterationAggregateResult>;
  meaningsAggregate?: Maybe<TransliterationAggregateResult>;
  tagsAggregate?: Maybe<TagAggregateResult>;
  relatedExpressionsAggregate?: Maybe<ExpressionAggregateResult>;
  referencesAggregate?: Maybe<ReferenceAggregateResult>;
};


export type ExpressionTitlesArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionLanguagesArgs = {
  filter?: Maybe<LanguageFilter>;
  order?: Maybe<LanguageOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionLexemeArgs = {
  filter?: Maybe<ExpressionFilter>;
};


export type ExpressionLiteralTranslationsArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionPracticalTranslationsArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionMeaningsArgs = {
  filter?: Maybe<TransliterationFilter>;
  order?: Maybe<TransliterationOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionTagsArgs = {
  filter?: Maybe<TagFilter>;
  order?: Maybe<TagOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionRelatedExpressionsArgs = {
  filter?: Maybe<ExpressionFilter>;
  order?: Maybe<ExpressionOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionReferencesArgs = {
  filter?: Maybe<ReferenceFilter>;
  order?: Maybe<ReferenceOrder>;
  first?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type ExpressionTitlesAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};


export type ExpressionLanguagesAggregateArgs = {
  filter?: Maybe<LanguageFilter>;
};


export type ExpressionLiteralTranslationsAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};


export type ExpressionPracticalTranslationsAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};


export type ExpressionMeaningsAggregateArgs = {
  filter?: Maybe<TransliterationFilter>;
};


export type ExpressionTagsAggregateArgs = {
  filter?: Maybe<TagFilter>;
};


export type ExpressionRelatedExpressionsAggregateArgs = {
  filter?: Maybe<ExpressionFilter>;
};


export type ExpressionReferencesAggregateArgs = {
  filter?: Maybe<ReferenceFilter>;
};

export enum DgraphIndex {
  Int = 'int',
  Int64 = 'int64',
  Float = 'float',
  Bool = 'bool',
  Hash = 'hash',
  Exact = 'exact',
  Term = 'term',
  Fulltext = 'fulltext',
  Trigram = 'trigram',
  Regexp = 'regexp',
  Year = 'year',
  Month = 'month',
  Day = 'day',
  Hour = 'hour',
  Geo = 'geo'
}

export type ScriptPatch = {
  names?: Maybe<Array<Maybe<TransliterationRef>>>;
};

export type UpdateReferenceInput = {
  filter: ReferenceFilter;
  set?: Maybe<ReferencePatch>;
  remove?: Maybe<ReferencePatch>;
};

export type AlphabetAggregateResult = {
  __typename?: 'AlphabetAggregateResult';
  count?: Maybe<Scalars['Int']>;
  codeMin?: Maybe<Scalars['String']>;
  codeMax?: Maybe<Scalars['String']>;
  charactersMin?: Maybe<Scalars['String']>;
  charactersMax?: Maybe<Scalars['String']>;
};

export type GetExpressionsByUuidQueryVariables = Exact<{
  uuids: Array<Scalars['String']> | Scalars['String'];
}>;


export type GetExpressionsByUuidQuery = (
  { __typename?: 'Query' }
  & { queryExpression?: Maybe<Array<Maybe<(
    { __typename?: 'Expression' }
    & Pick<Expression, 'uuid'>
    & { titles: Array<(
      { __typename?: 'Transliteration' }
      & Pick<Transliteration, 'value'>
    )>, languages: Array<(
      { __typename?: 'Language' }
      & Pick<Language, 'code'>
      & { names: Array<(
        { __typename?: 'Transliteration' }
        & Pick<Transliteration, 'value'>
      )> }
    )>, practicalTranslations: Array<(
      { __typename?: 'Transliteration' }
      & Pick<Transliteration, 'value'>
    )> }
  )>>> }
);

export type SearchExpressionsQueryVariables = Exact<{
  query: Scalars['String'];
}>;


export type SearchExpressionsQuery = (
  { __typename?: 'Query' }
  & { byTitle?: Maybe<Array<Maybe<(
    { __typename?: 'Expression' }
    & Pick<Expression, 'uuid'>
    & { matches: Array<(
      { __typename?: 'Transliteration' }
      & Pick<Transliteration, 'value'>
    )> }
  )>>>, byLiteral?: Maybe<Array<Maybe<(
    { __typename?: 'Expression' }
    & Pick<Expression, 'uuid'>
    & { matches: Array<(
      { __typename?: 'Transliteration' }
      & Pick<Transliteration, 'value'>
    )> }
  )>>>, byPractical?: Maybe<Array<Maybe<(
    { __typename?: 'Expression' }
    & Pick<Expression, 'uuid'>
    & { matches: Array<(
      { __typename?: 'Transliteration' }
      & Pick<Transliteration, 'value'>
    )> }
  )>>>, byMeaning?: Maybe<Array<Maybe<(
    { __typename?: 'Expression' }
    & Pick<Expression, 'uuid'>
    & { matches: Array<(
      { __typename?: 'Transliteration' }
      & Pick<Transliteration, 'value'>
    )> }
  )>>> }
);

export type ExpressionSearchFieldsFragment = (
  { __typename?: 'Expression' }
  & Pick<Expression, 'uuid' | 'type'>
);
