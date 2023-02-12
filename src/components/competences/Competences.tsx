import styled from "styled-components";
import { competences } from "../../constant/competences";

import { Section } from "../Section";
import { H2 } from "../typography/h2";
import { Competence } from "./Competence";

const CompetencesContainer = styled.div`
  width: 100%;
  max-width: var(--containerWidth);
  padding: 0 16px;
`;

export const Competences = () => {
  return (
    <Section>
      <H2>Competences</H2>
      <CompetencesContainer>
        {competences.map((competence, index) => (
          <Competence
            key={index}
            name={competence.name}
            percentage={competence.percentage}
          ></Competence>
        ))}
      </CompetencesContainer>
    </Section>
  );
};
