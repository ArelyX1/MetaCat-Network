import React from "react";
import '../styles/eventCardStyle.css';


interface EventCardProps {
  title: string;
  imageUrl: string;
  date: string;
  location: string;
}

export const EventCard: React.FC<EventCardProps> = ({ title, imageUrl, date, location}) => {
  return (
    <div className="event-card" style={{position: 'relative'}}>
      <figure className="event-img-container">
        <img src={imageUrl} alt={`Imagen de ${title}`} className="event-img" />
      </figure>
      <summary className="event-content">
        <h2 className="event-title">{title}</h2>
        <div className="event-meta">
          <span className="event-date">{date}</span>
          <span className="event-location">{location}</span>
        </div>
      </summary>
    </div>
  );
};
