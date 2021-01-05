import { useEffect, useState } from 'react';
import useSWR, { keyInterface } from 'swr';
import { fetcherFn } from 'swr/dist/types';
import fetch, { Response } from 'cross-fetch';

import logger from './logger';

// const apiEndpoint = process.env.NODE_ENV === 'development'
//   ? 'http://localhost:8800'
//   : 'https://api.doraboateng.com';
const apiEndpoint = 'https://api.doraboateng.com';

// const graphEndpoint = process.env.NODE_ENV === 'development'
//   ? 'http://localhost:8080'
//   : 'https://graph.doraboateng.com';
const graphEndpoint = 'https://graph.doraboateng.com';

export const fetchGraphQL = async (
  query: string,
  vars?: object | string,
) => {
  const variables = typeof vars === 'string' ? JSON.parse(vars) : vars;

  return fetch(`${graphEndpoint}/graphql`, {
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'post',
  });
};

export const useNetwork = <Data = any>(
  key: keyInterface,
  fetcher: fetcherFn<Response>,
  handler: (any, Function) => void,
) => {
  const [data, setData] = useState<Data>(null);
  const { data: response, error, isValidating } = useSWR(key, fetcher);

  if (error) {
    logger.warning(`useNetwork() error: ${error}`);
  }

  useEffect(() => {
    if (isValidating) {
      return;
    }

    if (response && !response.bodyUsed) {
      response.json()
        .then(body => handler(body, setData))
        .catch(parseError => logger.error(parseError));
    }
  }, [handler, isValidating, response, setData]);

  return { data, isValidating };
};

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

/** @deprecated */
export const useSearch = (query: string) => {
  const { data, isValidating } = useNetwork(
    query,
    q => fetch(`${apiEndpoint}/search?q=${encodeURIComponent(q)}`),
    ({ results }, update) => update(results),
  );

  return { isLoading: isValidating, results: data };
};
