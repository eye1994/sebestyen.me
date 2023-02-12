import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "./use-debounced-callback";

export const useEnteredViewPort = (elementRef: RefObject<HTMLElement>) => {
  const top = useRef<number>(0);
  const scrollY = useRef<number>(0);
  const [isVisible, setIsVisible] = useState(false);

  const updateTopElementPosition = () => {
    top.current =
      elementRef!.current!.getBoundingClientRect().top + window.scrollY;
  };

  const setElementVisibility = () => {
    const viewportHeight =
      window.innerHeight || document.documentElement.clientHeight;
    if (scrollY.current + viewportHeight >= top.current && !isVisible) {
      setIsVisible(true);
    }
  };

  const onScroll = useCallback(() => {
    scrollY.current = window.scrollY;
    setElementVisibility();
  }, []);

  const onResize = useCallback(
    useDebouncedCallback(() => {
      console.log("resized");
      scrollY.current = window.scrollY;
      updateTopElementPosition();
      setElementVisibility();
    }, 100),
    []
  );

  useEffect(() => {
    updateTopElementPosition();
  }, []);

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
  }, [isVisible]);

  return isVisible;
};
