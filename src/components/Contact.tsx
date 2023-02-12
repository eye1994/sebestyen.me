import styled from "styled-components";
import { FiSend, FiLinkedin, FiGithub } from "react-icons/fi";
import { WhiteSection } from "./Section";
import { H2 } from "./typography/h2";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 16px;

  .icon {
    height: 44px;
    width: 44px;
    padding: 8px;
    margin-right: 8px;
    color: var(--primary);

    &:last-of-type {
      margin-right: 0px;
    }
  }
`;

export const Contact = () => {
  return (
    <WhiteSection>
      <H2>Contact</H2>
      <ContactContainer>
        <a href="mailto:sebestyenroland21@gmail.com" target="_blank">
          <FiSend className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/eye1994/" target="_blank">
          <FiLinkedin className="icon" />
        </a>
        <a href="https://github.com/eye1994" target="_blank">
          <FiGithub className="icon" />
        </a>
      </ContactContainer>
    </WhiteSection>
  );
};
