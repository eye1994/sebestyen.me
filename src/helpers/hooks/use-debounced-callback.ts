import { useCallback, useRef } from "react";

export const useDebouncedCallback = (callback: Function, wait: number) => {
  const timeout = useRef<number>();

  return useCallback(
    (...args: any) => {
      const later = () => {
        clearTimeout(timeout.current);
        callback(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = +setTimeout(later, wait);
    },
    [callback, wait]
  );
};
