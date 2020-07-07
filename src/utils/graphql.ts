import { useEffect, useState } from 'react';
import useSWR from 'swr';
import fetch from 'node-fetch';

import logger from './logger';

export const fetchGraphQL = (
  query: string,
  vars?: object | string,
) => {
  const host = 'https://graph.doraboateng.com';
  const variables = typeof vars === 'string' ? JSON.parse(vars) : vars;

  return fetch(`${host}/graphql`, {
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'post',
  });
};

export const useGraphQL = (
  query: string,
  variables?: object,
) => {
  console.log('useGraphQL');
  const [result, setResult] = useState(null);
  const {
    data: response,
    error,
    isValidating,
  } = useSWR([query, JSON.stringify(variables)], fetchGraphQL);

  console.log('useGraphQL response', response, error, isValidating);

  if (error) {
    logger.warning(`useSWR error in useGrapQL: ${error}`);
  }

  useEffect(() => {
    if (isValidating) {
      return;
    }

    if (response && !response.bodyUsed) {
      response.json().then(({ data, errors }) => {
        if (errors) {
          logger.warning(`API error in useGrapQL (${response.status}): ${errors}`);
        } else {
          setResult(data);
        }

        return null;
      }).catch(() => {});
    }
  }, [query, response, variables, isValidating]);

  return { isLoading: isValidating, result };
};
