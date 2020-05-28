import React, { useEffect, useState } from 'react';
import useSWR, { responseInterface } from 'swr';
import fetch from 'unfetch';

export const fetchGraphQL = (
  query: string,
  vars?: object | string,
) => {
  const host = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8800';
  const variables = typeof vars === 'string' ? JSON.parse(vars) : vars;

  return fetch(`${host}/graphql`, {
      body: JSON.stringify({ query, variables }),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'post',
    },
  );
}

export const useGraphQL = (
  query: string,
  variables?: object,
) => {
  const [result, setResult] = useState(null);
  const {
    data: response,
    error,
    isValidating,
  } = useSWR([query, JSON.stringify(variables)], fetchGraphQL);

  if (error) {
    console.log('TODO: log error to Sentry', error);
  }

  useEffect(() => {
    if (isValidating) {
      return;
    }

    response && !response.bodyUsed && response.json().then(({ data, errors }) => {
      if (errors) {
        console.log('TODO: log error to Sentry', response.status, errors);
      } else {
        setResult(data);
      }
    });
  }, [query, variables, isValidating]);

  return { isLoading: isValidating, result };
}
