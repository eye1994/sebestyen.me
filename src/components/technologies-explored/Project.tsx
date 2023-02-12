import { FC } from "react";

import styled from "styled-components";
import { A } from "../typography/a";
import { Paragraph } from "../typography/Paragraph";

const ProjectContainer = styled.div`
  background-color: var(--lightGray);
  padding: 16px;
  margin-bottom: 16px;
`;

const ProjectDescription = styled(Paragraph)`
  padding: 0;
`;

const ProjectLinksContainer = styled.div`
  display: flex;
  flex-direction row;
  margin-top: 8px;
`;

const ProjectLink = styled(A)`
  font-size: 14px;
  padding-right: 8px;
  margin-right: 8px;
  border-right: 1px solid var(--primary);

  &:last-of-type {
    border: none;
  }
`;

export interface ProjectProps {
  description: string;
  codebase: string;
  demo?: string;
}

export const Project: FC<ProjectProps> = ({ description, codebase, demo }) => {
  return (
    <ProjectContainer>
      <ProjectDescription>{description}</ProjectDescription>
      <ProjectLinksContainer>
        {codebase && (
          <ProjectLink href={codebase} target="_blank">
            Project Repo
          </ProjectLink>
        )}
        {demo && (
          <ProjectLink href={demo} target="_blank">
            Demo
          </ProjectLink>
        )}
      </ProjectLinksContainer>
    </ProjectContainer>
  );
};
