import { Section } from "./Section";
import { H2 } from "./typography/h2";
import { Paragraph } from "./typography/Paragraph";

import styled from "styled-components";
import { A } from "./typography/a";

const HobbiesContainer = styled.div`
  max-width: var(--containerWidth);
  ${H2} {
    text-align: center;
  }

  ${Paragraph} {
    margin-bottom: 8px;

    &:last-of-type {
      margin-bottom: 0px;
    }
  }
`;

export const Hobbies = () => {
  return (
    <Section>
      <HobbiesContainer>
        <H2>Hobbies</H2>
        <Paragraph>
          Besides programming, in my free time I also have a love for adventure
          and exploring new places. Whenever I can, I try to escape the city and
          go into nature. I love to go for hikes and discover new scenic spots.
          I also enjoy capturing memories of my travels and experiences through
          photography. Taking pictures allows me to freeze a moment in time and
          preserve it forever. It's a wonderful hobby that combines my love for
          adventure and creativity.
        </Paragraph>
        <Paragraph>
          Some of the photographs I've captured can be seen on my{" "}
          <A href="https://www.instagram.com/eye1994r/" target="_blank">
            Instagram account.
          </A>
        </Paragraph>
      </HobbiesContainer>
    </Section>
  );
};
