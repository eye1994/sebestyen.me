import { useRef } from "react";
import styled, { css } from "styled-components";
import { useEnteredViewPort } from "../helpers/hooks/use-entered-viewport";

const ProgressContainer = styled.div`
  background-color: var(--progressBackground);
  height: 20px;
  width: 100%;
  margin: 8px 0;
  border-radius: 8px;
`;

const ProgressBarContainer = styled.div<{
  percentage: number;
  isVisible: boolean;
}>`
  background-color: var(--progressBarFillColor);
  height: 20px;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  transition: width 2s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  width: 0%;

  ${({ isVisible, percentage }) =>
    isVisible &&
    css`
      width: ${percentage}%;
    `}

  ${({ percentage }) =>
    percentage === 100 &&
    css`
      border-radius: 8px;
    `}
`;

export interface ProgressBarProps {
  percentage: number;
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
  const progressBarRef = useRef(null);
  const isVisible = useEnteredViewPort(progressBarRef);

  return (
    <div>
      <ProgressContainer ref={progressBarRef}>
        <ProgressBarContainer
          role="progressbar"
          aria-valuenow={percentage}
          percentage={percentage}
          isVisible={isVisible}
          aria-valuemin={0}
          aria-valuemax={100}
        ></ProgressBarContainer>
      </ProgressContainer>
    </div>
  );
};
