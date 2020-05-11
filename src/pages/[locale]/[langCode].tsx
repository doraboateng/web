import { GetServerSideProps } from 'next';
import fetch from 'node-fetch';

import { LanguagePageProps } from '../../language/types';

const LanguagePage = ({ code, name }: LanguagePageProps) => (
  <div>{`"${name}" language page (${code})`}</div>
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
  const response = await fetch(`${process.env.apiUrl}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data: { language } } = await response.json();

  console.log(`GraphQL request to ${response.url}`, language);

  return {
    props: {
      code: params.langCode,
      name: 'Twi',
      localizedName: 'Twi',
    }
  }
}
