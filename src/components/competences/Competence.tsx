import { ProgressBar } from "../ProgressBar";

export interface CompetenceProps {
  name: string;
  percentage: number;
}

export const Competence = ({ name, percentage }: CompetenceProps) => {
  return (
    <div className="competence-container">
      <div className="competence-name">{name}</div>
      <ProgressBar percentage={percentage}></ProgressBar>
    </div>
  );
};
