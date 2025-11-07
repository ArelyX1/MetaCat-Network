// HomePage.tsx
import { Header } from "../components/Header";
import { BkCubesBox } from "../Three/views/BkCubeBox";
import { EventsList } from "../../shared/ui/EventsList";

export function HomePage() {
  return (
    <div className="relative min-h-screen w-screen">
      <div className="fixed inset-0 z-[-10] pointer-events-none">
        <BkCubesBox />
      </div>
      <Header/>
      <EventsList/>
    </div>
  )
}

