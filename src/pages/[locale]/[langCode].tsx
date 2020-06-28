import React from 'react';
import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';

import Page from '../../language/Page';
import { LanguagePageProps } from '../../language/types';

const LanguagePage = (props: LanguagePageProps) => <Page {...props} />;

export default LanguagePage;

const query = `
  query ($code: String!) {
    language (code: $code) {
      code
      names {
        value
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const variables = { code: params.langCode };
  const apiHost = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8800';
  const response = await fetch(`${apiHost}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data: { language } } = await response.json();
  const name = language && language.names.length
    ? language.names[0].value
    : params.langCode;

  return {
    props: {
      code: params.langCode,
      name,
      localizedName: name,
    },
  };
};
