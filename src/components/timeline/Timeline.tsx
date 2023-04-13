import { experience } from "../../constant/experience";
import { TimelineEvent } from "./TimelineEvent";

export const Timeline = () => {
  return (
    <section className="white">
      <h2>Experience</h2>

      {experience.map((event, index) => (
        <TimelineEvent
          key={index}
          title={event.title}
          description={event.description}
          startPeriod={event.startPeriod}
          endPeriod={event.endPeriod}
          hashtag={event.hashtag}
        ></TimelineEvent>
      ))}
    </section>
  );
};
