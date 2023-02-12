import styled from "styled-components";
import { experience } from "../../constant/experience";
import { WhiteSection } from "../Section";
import { H2 } from "./../typography/h2";
import { TimelineEvent } from "./TimelineEvent";

export const Timeline = () => {
  return (
    <WhiteSection>
      <H2>Experience</H2>

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
    </WhiteSection>
  );
};
