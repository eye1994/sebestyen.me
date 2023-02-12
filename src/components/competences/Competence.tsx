import styled from "styled-components";
import { ProgressBar } from "../ProgressBar";

const CompetenceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const CompetenceName = styled.div`
  font-size: 12px;
`;

export interface CompetenceProps {
  name: string;
  percentage: number;
}

export const Competence = ({ name, percentage }: CompetenceProps) => {
  return (
    <CompetenceContainer>
      <CompetenceName>{name}</CompetenceName>
      <ProgressBar percentage={percentage}></ProgressBar>
    </CompetenceContainer>
  );
};
