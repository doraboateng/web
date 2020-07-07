import React from 'react';
import { GetServerSideProps } from 'next';

import Page from '../../language/Page';
import { LanguagePageProps } from '../../language/types';
import { fetchGraphQL, logger } from '../../utils';

const LanguagePage = (props: LanguagePageProps) => <Page {...props} />;

export default LanguagePage;

const query = `
  query ($code: String!) {
    getLanguage (code: $code) {
      code
      names {
        value
      }
    }
  }
`;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const response = await fetchGraphQL(query, { code: params.langCode });
  const body = await response.json();

  if ('errors' in body) {
    body.errors.forEach(error => logger.error(
      `GraphQL error (${response.status}): ${error.message}`,
    ));

    return { props: { errorCode: 500 } };
  }

  if (!body.data.getLanguage) {
    return { props: { errorCode: 404 } };
  }

  const name = body.data.getLanguage.names[0].value;

  return {
    props: {
      code: params.langCode,
      name,
      localizedName: name,
    },
  };
};
