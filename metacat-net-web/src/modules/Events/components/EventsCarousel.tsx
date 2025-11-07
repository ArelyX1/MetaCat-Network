import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import '../styles/carouselStyle.css';


export interface EventProps {
  title: string;
  imageUrl: string;
  date: string;
  location: string;
}

const MAX_VISIBLE_CARDS = 3;

type EventsCarouselProps = {
  children?: React.ReactNode;
};

export const EventsCarousel: React.FC<EventsCarouselProps> = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const totalChildren = React.Children.count(children);

  const onClickLeft = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onClickRight = () => {
    if (current < totalChildren - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <div className="event-carousel">
      {current > 0 && (
        <button className="nav left" onClick={onClickLeft}>
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === current ? 1 : 0,
            "--offset": (current - i) / 3,
            "--direction": Math.sign(current - i),
            "--abs-offset": Math.abs(current - i) / 3,
            pointerEvents: current === i ? "auto" : "none",
            opacity: Math.abs(current - i) >= MAX_VISIBLE_CARDS ? "0" : "1",
            display: Math.abs(current - i) > MAX_VISIBLE_CARDS ? "none" : "block",
          } as React.CSSProperties}
        >
          {child}
        </div>
      ))}
      {current < totalChildren - 1 && (
        <button className="nav right" onClick={onClickRight}>
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
};
