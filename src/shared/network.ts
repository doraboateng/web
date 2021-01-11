import { useEffect, useState } from 'react';
import useSWR, { keyInterface } from 'swr';
import { fetcherFn } from 'swr/dist/types';
import fetch, { Response } from 'cross-fetch';

import { logWarning, logError } from './logger';

const apiEndpoint = process.env.API_ENDPOINT;
const graphEndpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;

export async function fetchGraphQL<R>(query: string, vars?: object | string) {
  const variables = typeof vars === 'string' ? JSON.parse(vars) : vars;

  const response = await fetch(`${graphEndpoint}/graphql`, {
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'post',
  });

  const { data, errors } = await response.json();

  if (errors) {
    logWarning(`fetchGraphQL() error (${response.status}): ${errors}`);
  }

  return data as R;
}

export async function oldFetchGraphQL(query: string, vars?: object | string) {
  const variables = typeof vars === 'string' ? JSON.parse(vars) : vars;

  return fetch(`${graphEndpoint}/graphql`, {
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    method: 'post',
  });
}

export function useGraphQL(query: string, variables?: object) {
  const [result, setResult] = useState(null);
  const {
    data: response,
    error,
    isValidating,
  } = useSWR([query, JSON.stringify(variables)], oldFetchGraphQL);

  if (error) {
    logWarning(`useSWR error in useGraphQL: ${error}`);
  }

  useEffect(() => {
    if (isValidating) {
      return;
    }

    if (response && !response.bodyUsed) {
      response.json().then(({ data, errors }) => {
        if (errors) {
          logWarning(`API error in useGrapQL (${response.status}): ${errors}`);
        } else {
          setResult(data);
        }

        return null;
      }).catch(() => {});
    }
  }, [query, response, variables, isValidating]);

  return { isLoading: isValidating, result };
}

export function useNetwork<Data = any>(
  key: keyInterface,
  fetcher: fetcherFn<Response>,
  handler: (any, Function) => void,
) {
  const [data, setData] = useState<Data>(null);
  const { data: response, error, isValidating } = useSWR(key, fetcher);

  if (error) {
    logWarning(`useNetwork() error: ${error}`);
  }

  useEffect(() => {
    if (isValidating) {
      return;
    }

    if (response && !response.bodyUsed) {
      response.json()
        .then(body => handler(body, setData))
        .catch(parseError => logError(parseError));
    }
  }, [handler, isValidating, response, setData]);

  return { data, isValidating };
}

/** @deprecated */
export const useSearch = (query: string) => {
  const { data, isValidating } = useNetwork(
    query,
    q => fetch(`${apiEndpoint}/search?q=${encodeURIComponent(q)}`),
    ({ results }, update) => update(results),
  );

  return { isLoading: isValidating, results: data };
};
