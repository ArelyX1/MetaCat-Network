import { Header } from "../components/Header";
import { BkCubesBox } from "../Three/views/BkCubeBox";
import { EventsList } from "../../shared/ui/EventsList";
import { TetoCorner } from "../Three/components/TetoCorner";
import '../styles/homePageStyle.css';

export function HomePage() {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Canvas de fondo */}
      <div className="teto-background fixed inset-0 z-[-10] pointer-events-none">
        <BkCubesBox />
      </div>

      <div className="teto-corner fixed bottom-0 right-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 pointer-events-none z-0">
        <TetoCorner />
      </div>


      {/* Header y contenido */}
      <Header/>
      <EventsList/>
    </div>
  )
}
