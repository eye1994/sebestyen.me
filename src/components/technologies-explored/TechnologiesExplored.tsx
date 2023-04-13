import { technologiesExplored } from "../../constant/explored";
import { TechnologyExplored } from "./TechnologyExplored";

export const TechnologiesExplored = () => {
  return (
    <section className="white">
      <h2>Technologies Explored</h2>
      <div className="technologies-container">
        {technologiesExplored.map(({ name, projects }, index) => {
          return (
            <TechnologyExplored
              key={index}
              name={name}
              projects={projects}
            ></TechnologyExplored>
          );
        })}
      </div>
    </section>
  );
};
