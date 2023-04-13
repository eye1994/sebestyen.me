import { FC } from "react";

export interface ProjectProps {
  description: string;
  codebase: string;
  demo?: string;
}

export const Project: FC<ProjectProps> = ({ description, codebase, demo }) => {
  return (
    <div className="project-container">
      <p className="project-description">{description}</p>
      <div className="project-link-container">
        {codebase && (
          <a className="project-link" href={codebase} target="_blank">
            Project Repo
          </a>
        )}
        {demo && (
          <a className="project-link" href={demo} target="_blank">
            Demo
          </a>
        )}
      </div>
    </div>
  );
};
