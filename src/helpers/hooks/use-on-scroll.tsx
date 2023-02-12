import { useCallback, useEffect, useRef, useState } from "react";

export const useOnScroll = (onScrollCallback: (scrollY: number) => void) => {
  const onScroll = useCallback(() => {
    const scrollY = window.scrollY;
    onScrollCallback(scrollY);
  }, [onScrollCallback]);

  const cleanup = () => {
    document.removeEventListener("scroll", onScroll);
  };

  useEffect(() => {
    document.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [onScrollCallback]);
};
