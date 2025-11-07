import { positionLocal } from "three/tsl";

export function Header() {
  return (
    <header style={{
        position: 'relative',
        zIndex: 10,
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.49)',
        backdropFilter: 'blur(5px)'
        }}>
      <h1 className="text-xl font-bold text-center">Welcome to MetaCat Network</h1>
    </header>
  );
}
