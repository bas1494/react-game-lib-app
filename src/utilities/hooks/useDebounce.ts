import { useEffect, useRef, useCallback } from 'react';

const useDebounce = (callback: (...args: any[]) => void, delay: number) => {
  const timeoutRef = useRef<number | undefined>(undefined);

  const debouncedFunction = useCallback(
    (...args: any[]) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = window.setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [delay]);

  return debouncedFunction;
};

export default useDebounce;