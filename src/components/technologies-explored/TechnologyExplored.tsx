import { FC } from "react";
import { Project, ProjectProps } from "./Project";

import styled from "styled-components";

export interface TechnologyExploredProps {
  name: string;
  projects: ProjectProps[];
}

const TechnologyNameContainer = styled.div`
  margin-bottom: 8px;
`;

export const TechnologyExplored: FC<TechnologyExploredProps> = ({
  name,
  projects,
}) => {
  return (
    <>
      <TechnologyNameContainer>{name}</TechnologyNameContainer>
      <div>
        {projects.map(({ description, codebase, demo }, index) => (
          <Project
            key={index}
            description={description}
            codebase={codebase}
            demo={demo}
          />
        ))}
      </div>
    </>
  );
};
