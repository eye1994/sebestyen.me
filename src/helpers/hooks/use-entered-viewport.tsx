import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "./use-debounced-callback";

export const useEnteredViewPort = (elementRef: RefObject<HTMLElement>) => {
  const top = useRef<number>(0);
  const scrollY = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateTopElementPosition = useCallback(() => {
    top.current =
      elementRef!.current!.getBoundingClientRect().top + window.scrollY;
  }, [elementRef]);

  const setElementVisibility = useCallback(() => {
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (scrollY.current + viewportHeight >= top.current && !isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  const onScroll = useCallback(() => {
    scrollY.current = window.scrollY;
    setElementVisibility();
  }, [setElementVisibility]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onResize = useCallback(
    useDebouncedCallback(() => {
      scrollY.current = window.scrollY;
      updateTopElementPosition();
      setElementVisibility();
    }, 100),
    [updateTopElementPosition, setElementVisibility]
  );

  useEffect(() => {
    updateTopElementPosition();
  }, [updateTopElementPosition]);

  useEffect(() => {
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  useEffect(() => {
    document.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  useEffect(() => {
    if (isVisible) {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    }
  }, [isVisible, onResize, onScroll]);

  return isVisible;
};
