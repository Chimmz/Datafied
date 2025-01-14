import React, { useCallback, useState } from 'react';
import useToggle from './useToggle';

interface Params<APIResponse> {
  startLoadingInitially?: boolean;
  autoStopLoading?: boolean;
  checkPositiveResponse?: (res: APIResponse) => boolean;
}

function useRequest<APIResponse>(args?: Params<APIResponse>) {
  const [response, setResponse] = useState<APIResponse | undefined>(undefined);
  const [loading, setLoading] = useState(args?.startLoadingInitially || false);
  const [loaded, setLoaded] = useState(false);
  const [isRetrying, setIsRetrying] = useState(false);

  const startLoading = useCallback(() => setLoading(true), [setLoading]);
  const stopLoading = useCallback(() => setLoading(false), [setLoading]);

  const sendReq = useCallback(
    async (req: Promise<any>, maxRetries?: number | '~'): Promise<any> => {
      startLoading();

      try {
        const data = await req;
        setResponse(data);

        if (!maxRetries) {
          setLoaded(true);
          if (args?.autoStopLoading !== false) stopLoading();
          return data;
        }

        // Base case for recursion
        if (
          (typeof maxRetries === 'number' && maxRetries < 1) ||
          (maxRetries === '~' && args?.checkPositiveResponse?.(data))
        ) {
          setIsRetrying(false);
          return data;
        }

        setIsRetrying(true);
        const keepRetryingUntilPositiveResponse = maxRetries === '~';

        return sendReq(req, keepRetryingUntilPositiveResponse ? '~' : maxRetries - 1); // Retry
      } catch (err) {
        console.log('Error in useRequest: ', err);
      } finally {
        setLoaded(true);
        if (args?.autoStopLoading === false) return;
        stopLoading();
      }
    },
    [startLoading, stopLoading, setIsRetrying]
  );

  return {
    sendReq,
    response,
    setResponse,
    loading,
    startLoading,
    stopLoading,
    loaded,
    isRetrying
  };
}

export default useRequest;
