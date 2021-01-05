import { API_ENDPOINT } from '../constants';
import { useNetwork } from '../utils';

export default function useSearch(query: string) {
  const { data, isValidating } = useNetwork(
    query,
    q => fetch(`${API_ENDPOINT}/search?q=${encodeURIComponent(q)}`),
    ({ results }, update) => update(results),
  );

  return { isLoading: isValidating, results: data };
}
