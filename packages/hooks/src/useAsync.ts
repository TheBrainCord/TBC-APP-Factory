import { useCallback, useEffect, useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface AsyncState<T> {
  data: T | null;
  error: Error | null;
  status: Status;
  isLoading: boolean;
}

/**
 * Run an async function and track its loading/error/data state.
 *
 * @example
 * const { data, isLoading, error, execute } = useAsync(fetchOrders);
 * useEffect(() => { execute(userId); }, [userId]);
 */
export function useAsync<T, Args extends unknown[]>(
  fn: (...args: Args) => Promise<T>,
  immediate = false,
  ...immediateArgs: Args
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    status: 'idle',
    isLoading: false,
  });

  const execute = useCallback(
    async (...args: Args) => {
      setState({ data: null, error: null, status: 'loading', isLoading: true });
      try {
        const data = await fn(...args);
        setState({ data, error: null, status: 'success', isLoading: false });
        return data;
      } catch (err) {
        const error = err instanceof Error ? err : new Error(String(err));
        setState({ data: null, error, status: 'error', isLoading: false });
        throw error;
      }
    },
    [fn],
  );

  useEffect(() => {
    if (immediate) execute(...immediateArgs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ...state, execute };
}
