import { RefObject, useCallback, useEffect, useState } from "react";
import { useElementHeight } from "./use-element-height";
import { useOnScroll } from "./use-on-scroll";

export const useElementLeftViewport = (element: RefObject<HTMLElement>) => {
  const elementHeight = useElementHeight(element);
  const [isOutside, setIsOutside] = useState<boolean>(false);

  const onScroll = useCallback(
    (scrollY: number) => {
      setIsOutside(scrollY > elementHeight.current);
    },
    [elementHeight]
  );

  useEffect(() => {
    const scrollY = window.scrollY;
    setIsOutside(scrollY > elementHeight.current);
  }, []);

  useOnScroll(onScroll);

  return isOutside;
};
