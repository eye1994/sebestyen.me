import { FC, useMemo } from "react";

export interface TimelineEventProps {
  title: string;
  description?: string;
  startPeriod: string;
  endPeriod?: string;
  hashtag?: string;
}

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
    <div className="event-container">
      <div className="event-details">
        <div className="event-period">
          {period}
          <div className="event-point" />
        </div>
        {hashtag && <span className="hashtag">{hashtag}</span>}
      </div>
      <div className="event-content">
        <div className="event-title">{title}</div>
        <div className="event-description">{description}</div>
      </div>
    </div>
  );
};
