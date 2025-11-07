import React from "react";
import { EventCard } from "../../Events/components/EventCard";
import { EventsCarousel } from "../../Events/components/EventsCarousel";


const events = [
  {
    title: "Concierto de Rock",
    imageUrl: "https://example.com/rock-concert.jpg",
    date: "2024-07-15",
    location: "Auditorio Nacional",
  },
  {
    title: "Expo Tecnología",
    imageUrl: "https://example.com/expo-tech.jpg",
    date: "2024-08-10",
    location: "Centro de Convenciones",
  },
  {
    title: "workshop de Fotografía",
    imageUrl: "https://example.com/expo-tech.jpg",
    date: "2025-08-11",
    location: "FotoEstudio 360",
  },
  {
    title: "Tono de Rock",
    imageUrl: "https://example.com/expo-tech.jpg",
    date: "2024-18-12",
    location: "Wecco",
  }
  // ...más eventos
];



export const EventsList: React.FC = () => {
  return (
    <section className="events-list">
      <EventsCarousel>
        {events.map(event => (
          <EventCard key={event.title} {...event} />
        ))}
      </EventsCarousel>
    </section>
  );
};