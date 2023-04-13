import { competences } from "../../constant/competences";
import { Competence } from "./Competence";

export const Competences = () => {
  return (
    <section>
      <h2>Competences</h2>
      <div className="competences-container">
        {competences.map((competence, index) => (
          <Competence
            key={index}
            name={competence.name}
            percentage={competence.percentage}
          ></Competence>
        ))}
      </div>
    </section>
  );
};
