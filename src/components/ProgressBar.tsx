import { CSSProperties, useRef } from "react";
import { useEnteredViewPort } from "../helpers/hooks/use-entered-viewport";

export interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const progressBarRef = useRef(null);
  const isVisible = useEnteredViewPort(progressBarRef);

  const styles: CSSProperties = {
    ...(isVisible ? { width: `${percentage}%` } : { width: "0" }),
    ...(percentage === 100 ? { borderRadius: "8px" } : {}),
  };

  return (
    <div>
      <div className="progress-container" ref={progressBarRef}>
        <div
          className="progress-bar-container"
          role="progressbar"
          aria-valuenow={percentage}
          aria-valuemin={0}
          aria-valuemax={100}
          style={styles}
        ></div>
      </div>
    </div>
  );
};
