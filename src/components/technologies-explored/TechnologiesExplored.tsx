import styled from "styled-components";
import { technologiesExplored } from "../../constant/explored";
import { WhiteSection } from "../Section";
import { TechnologyExplored } from "./TechnologyExplored";
import { H2 } from "../typography/h2";

const TechnologiesContainer = styled.div`
  padding: 0 18px;
`;

export const TechnologiesExplored = () => {
  return (
    <WhiteSection>
      <H2>Technologies Explored</H2>
      <TechnologiesContainer>
        {technologiesExplored.map(({ name, projects }, index) => {
          return (
            <TechnologyExplored
              key={index}
              name={name}
              projects={projects}
            ></TechnologyExplored>
          );
        })}
      </TechnologiesContainer>
    </WhiteSection>
  );
};
