import { useEffect, useRef, useState } from "react";

export interface CodeAnimationProps {
  text: string;
  interval?: number;
}

export const CodeAnimation = ({ text, interval }: CodeAnimationProps) => {
  const getComputedText = (letters: string[], currentIndex: number) => {
    return letters
      .map((letter, index) => {
        if (index === currentIndex) {
          return `<${letter}/>`;
        }

        return letter;
      })
      .join("");
  };

  const currentIndex = useRef(1);
  const letters = useRef(text.split(""));
  const [computedText, setComputedText] = useState<string>(
    getComputedText(letters.current, 0)
  );

  const computeText = () => {
    const result = getComputedText(letters.current, currentIndex.current);

    if (currentIndex.current + 1 === letters.current.length) {
      currentIndex.current = 0;
    } else {
      currentIndex.current = currentIndex.current + 1;
    }

    setComputedText(result);
  };

  useEffect(() => {
    const id = setInterval(() => {
      computeText();
    }, interval || 500);

    return () => {
      clearInterval(id);
    };
  });

  return <>{computedText}</>;
};
