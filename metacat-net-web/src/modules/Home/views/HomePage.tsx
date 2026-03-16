import { Header } from "../components/Header";
import { BkCubesBox } from "../Three/views/BkCubeBox";
import { EventsList } from "../../shared/ui/EventsList";
import { TetoCorner } from "../Three/components/TetoCorner";
import { Marquee } from "../components/TopMarquee";

import '../styles/homePageStyle.css';

export function HomePage() {
  return (
    <div className="home-wrapper">
      {/* Canvas de fondo */}
      <div className="teto-background">
        <BkCubesBox />
      </div>

      <div className="marquee-fixed">
        <Marquee />
      </div>

      {/* Header (ahora solo el header, Marquee está fijo arriba) */}
      <div className="header">
        <Header />
      </div>
      <div style={{ height: "500px", backgroundColor: "transparent", margin: "1rem 0" }}>
        <EventsList />
      </div>
      {/* 
      <div style={{ height: "500px", backgroundColor: "#f0f0f0", margin: "1rem 0" }}>
          <p style={{ textAlign: "center", padding: "2rem" }}>Sección de prueba 1</p>
      </div>
      */}
      {/* Contenido scrolleable */}
      
      {/* Teto corner */}
      <div className="teto-corner" >
        <TetoCorner />
      </div>
    </div>
  );
}