import { positionLocal } from "three/tsl";

export function Header() {
  return (
    <header style={{
        position: 'relative',
        zIndex: 30,
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, 0.49)',
        backdropFilter: 'blur(5px)'
        }}>
      <h1 className="text-xl font-bold text-center">MetaCat</h1>
    </header>
  );
}
