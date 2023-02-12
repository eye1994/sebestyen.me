import styled from "styled-components";
import { H2 } from "./typography/h2";

export const Section = styled.div`
  background-color: var(--sectionBackground);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px 0;

  ${H2} {
    margin-bottom: 16px;
  }
`;

export const WhiteSection = styled(Section)`
  background-color: #ffffff;
`;
