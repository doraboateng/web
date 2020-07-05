import React from 'react';
import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';

import Page from '../../language/Page';
import { LanguagePageProps } from '../../language/types';
import logger from '../../utils/logger';

const LanguagePage = (props: LanguagePageProps) => <Page {...props} />;

export default LanguagePage;

const query = `
  query ($code: String!) {
    queryLanguage (filter: { code: { eq: $code } }) {
      code
      names {
        value
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const variables = { code: params.langCode };
  // const apiHost = process.env.NEXT_PUBLIC_INTERNAL_GRAPH;
  const apiHost = 'https://graph.doraboateng.com';
  const response = await fetch(`${apiHost}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  if (response.status !== 200) {
    // TODO
  }

  const body = await response.json();

  if ('errors' in body) {
    body.errors.forEach(error => logger.error(error.message));
    body.errors.forEach(error => console.log(error.message, error.locations));
  }

  const { data: { queryLanguage: results } } = body;
  const name = results && results[0].names.length
    ? results[0].names[0].value
    : params.langCode;

  return {
    props: {
      code: params.langCode,
      name,
      localizedName: name,
    },
  };
};
