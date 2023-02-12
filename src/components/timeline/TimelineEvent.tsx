import styled from "styled-components";

import { FC, useMemo } from "react";
import { Hashtag } from "../typography/Hashtag";
import { breakpoints } from "../../constant/breakpoints";

export interface TimelineEventProps {
  title: string;
  description?: string;
  startPeriod: string;
  endPeriod?: string;
  hashtag?: string;
}

const EventDetails = styled.div`
  width: 300px;
  text-align: center;
  position: relative;
  padding-bottom: 16px;

  &:last-of-type {
    padding-bottom: 0;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    width: 2px;
    background-color: var(--lightGray);
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    text-align: left;
    padding-left: 36px;
    padding-bottom: 4px;

    &:after {
      right: auto;
      left: 8px;
    }
  }
`;

const EventContent = styled.div`
  flex: 1;
  padding: 0 16px;
  font-weight: 200;
  padding-bottom: 16px;

  &:last-of-type {
    padding-bottom: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 100%;
    text-align: left;
    padding-left: 36px;
    position: relative;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 8px;
      height: 100%;
      width: 2px;
      background-color: var(--lightGray);
    }
  }
`;

const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: var(--containerWidth);

  &:first-of-type > ${EventDetails}:after {
    top: 8px;
  }

  &:last-of-type > ${EventDetails}:after {
    height: 18px;
  }

  @media (max-width: ${breakpoints.mobile}) {
    flex-direction: column;

    &:last-of-type > ${EventContent}:after {
      display: none;
    }
  }
`;

const EventPeriod = styled.div`
  font-weight: 200;
  font-size: 18px;
  line-height: 26px;
  position: relative;
`;

const EventTitle = styled.div`
  margin-bottom: 4px;
  font-size: 18px;
  line-height: 26px;
`;

const EventDescription = styled.div`
  font-size: 16px;
  line-height: 26px;
`;

const EventPoint = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  background: var(--primary);
  position: absolute;
  right: -7px;
  top: 8px;
  z-index: 2;

  @media (max-width: ${breakpoints.mobile}) {
    right: auto;
    left: -35px;
  }
`;

export const TimelineEvent: FC<TimelineEventProps> = ({
  startPeriod,
  endPeriod,
  title,
  description,
  hashtag,
}) => {
  const period = useMemo(() => {
    if (endPeriod === startPeriod) {
      return startPeriod;
    }

    return `${startPeriod} - ${endPeriod ? endPeriod : "present"}`;
  }, [startPeriod, endPeriod]);

  return (
    <EventContainer>
      <EventDetails>
        <EventPeriod>
          {period}
          <EventPoint />
        </EventPeriod>
        {hashtag && <Hashtag>{hashtag}</Hashtag>}
      </EventDetails>
      <EventContent>
        <EventTitle>{title}</EventTitle>
        <EventDescription>{description}</EventDescription>
      </EventContent>
    </EventContainer>
  );
};
