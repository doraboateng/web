import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';

import { LanguagePageProps } from '../../language/types';

const LanguagePage = ({ code, name }: LanguagePageProps) => (
  <div>{`Language page for "${name}" (${code})`}</div>
);

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
  const response = await fetch(`${process.env.API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data: { language } } = await response.json();
  const name = language && language.names.length
    ? language.names[0].value
    : params.langCode;

  console.log(`GraphQL request to ${response.url}`, language);

  return {
    props: {
      code: params.langCode,
      name,
      localizedName: name,
    }
  }
}
