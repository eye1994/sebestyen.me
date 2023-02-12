import { useRef } from "react";
import styled, { css } from "styled-components";
import { breakpoints } from "../constant/breakpoints";
import { useElementLeftViewport } from "../helpers/hooks/use-element-left-viewport";
import { Blink } from "../helpers/animation/Blink";
import { CodeAnimation } from "../helpers/animation/Code";
import { H1 } from "./typography/h1";
import { H3 } from "./typography/h3";

const HeaderContainer = styled.header`
  background-color: var(--primary);
  color: var(--secondaryText);
  text-align: center;
  width: 100%;
  padding: 16px;

  @media (max-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

const SitckyHeader = styled.header<{ isVisible: boolean }>`
  position: fixed;
  top: -50px;
  left: 0;
  height: 50px;
  background: var(--primary);
  width: 100vw;
  line-height: 50px;
  color: var(--secondaryText);
  text-align: center;
  z-index: 3;
  transition: top 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);

  ${({ isVisible }) =>
    isVisible &&
    css`
      top: 0;
    `}
`;

export const Header = () => {
  const headerRef = useRef<HTMLElement>(null);
  const headerIsOutsideTheViewPort = useElementLeftViewport(headerRef);

  return (
    <>
      <SitckyHeader isVisible={headerIsOutsideTheViewPort}>
        <H3>
          <CodeAnimation text="Roland"></CodeAnimation>
        </H3>
      </SitckyHeader>
      <HeaderContainer ref={headerRef}>
        <H1>{"</>"}</H1>
        <H1>Roland</H1>
        <H3>
          Coffe lover, developer <Blink>_</Blink>
        </H3>
      </HeaderContainer>
    </>
  );
};
