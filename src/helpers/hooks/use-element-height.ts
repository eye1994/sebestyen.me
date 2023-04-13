import { RefObject, useEffect, useRef } from "react";

export const useElementHeight = (elementRef: RefObject<HTMLElement>) => {
  const height = useRef<number>(0);

  useEffect(() => {
    height.current = elementRef!.current!.getBoundingClientRect().height;
  }, [elementRef]);

  return height;
};
