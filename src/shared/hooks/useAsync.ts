import { useEffect, useState } from 'react';

export default function useAsync(asyncFn: () => Promise<any>, args: Array<any>) {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);
  const isLoading = !error && !result;

  useEffect(() => {
    asyncFn.apply(asyncFn, args)
      .then(asyncResult => setResult(asyncResult))
      .catch(asyncError => setError(asyncError));
  }, [asyncFn, args]);

  return { error, isLoading, result };
}
