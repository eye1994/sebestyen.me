import { FC } from "react";
import { Project, ProjectProps } from "./Project";

export interface TechnologyExploredProps {
  name: string;
  projects: ProjectProps[];
}

export const TechnologyExplored: FC<TechnologyExploredProps> = ({
  name,
  projects,
}) => {
  return (
    <>
      <div className="technology-name-container">{name}</div>
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
