import styled from "styled-components";

export const Blink = styled.span`
  animation: blink infinite 1s steps(2);

  @keyframes blink {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
