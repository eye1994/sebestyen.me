import { RefObject, useEffect, useRef } from "react";

export const useElementHeight = (elementRef: RefObject<HTMLElement>) => {
  const height = useRef<number>(0);

  const updateHeight = () => {
    height.current = elementRef!.current!.getBoundingClientRect().height;
  };

  useEffect(() => {
    updateHeight();
  }, []);

  return height;
};
