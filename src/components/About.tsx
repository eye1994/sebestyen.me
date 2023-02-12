import styled from "styled-components";
import Picture from "./../assets/me.jpg";

import { Avatar } from "./Avatar";
import { breakpoints } from "../constant/breakpoints";
import { Section } from "./Section";
import { Hashtag } from "./typography/Hashtag";
import { Paragraph } from "./typography/Paragraph";

const AboutContainer = styled.div`
  width: 100%;
  max-width: var(--containerWidth);
  display: flex;
  flex-direction: row;

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const AvatarContainer = styled.div`
  padding: 16px 16px 0 16px;
  text-align: center;
`;

export const About = () => {
  return (
    <Section>
      <AboutContainer>
        <AvatarContainer>
          <Avatar src={Picture} width="150px" height="150px" />
          <Hashtag>#Frontend-Technical-Lead</Hashtag>
        </AvatarContainer>
        <Paragraph>
          I am Roland Sebestyen and my passion lies in Web Development. I am
          always eager to explore new and cutting-edge technologies. In the
          field of Web Development, I have a broad range of experience with
          several technologies and programming languages including JavaScript,
          Typescript, Angular, React, Ruby, and NodeJS. My goal is to work as a
          Full-Stack developer. I am a quick learner and prefer to find the most
          suitable solution for a situation, rather than being limited to one
          particular language or framework. I am determined and never give up
          until I find the answer. I am also passionate about challenges and
          enjoy facing them. Staying up-to-date with the latest advancements in
          Web Development is a daily priority for me.
        </Paragraph>
      </AboutContainer>
    </Section>
  );
};
