import { useRef } from "react";
import { useElementLeftViewport } from "../helpers/hooks/use-element-left-viewport";
import { CodeAnimation } from "../helpers/animation/Code";
import clsx from "clsx";

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const headerIsOutsideTheViewPort = useElementLeftViewport(headerRef);

  const stickyHeaderClassNames = clsx([
    "sticky-header",
    headerIsOutsideTheViewPort && "visible",
  ]);

  return (
    <>
      <div className={stickyHeaderClassNames}>
        <h3>
          <CodeAnimation text="Roland"></CodeAnimation>
        </h3>
      </div>
      <div className="header-container" ref={headerRef}>
        <h1>{"</>"}</h1>
        <h1>Roland</h1>
        <h3>
          Coffee lover, developer <span className="blink">_</span>
        </h3>
      </div>
    </>
  );
};
