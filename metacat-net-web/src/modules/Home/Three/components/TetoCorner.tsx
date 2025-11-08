import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TetoPear } from './Teto';

export function TetoCorner() {
  return (
    <Canvas 
      camera={{ position: [2, 2, 8], fov: 37 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 16, 30]} intensity={10} />
      <directionalLight position={[-60, 40, -50]} intensity={10} />
      <directionalLight position={[6, -10, -0]} intensity={10} />
      <TetoPear path="src/assets/3dModels/teto_pear.glb" />
      <OrbitControls 
        autoRotate 
        autoRotateSpeed={2}
        enableZoom={false}
        enablePan={false}
        enableRotate={false}
      />
    </Canvas>
  );
}

/*
function TetoModel({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const groupRef = useRef<THREE.Group>(null);
  const initialMousePos = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Capturar posición inicial del mouse
    const handleInitialMouseMove = (e: MouseEvent) => {
      initialMousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      initialMousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    // Registrar posición inicial apenas el componente monta
    window.addEventListener('mousemove', handleInitialMouseMove, { once: true });


    const handleMouseMove = (e: MouseEvent) => {
      // Normalizar posición actual del mouse
      const currentX = (e.clientX / window.innerWidth) * 2 - 1;
      const currentY = -(e.clientY / window.innerHeight) * 2 + 1;

      // Calcular diferencia respecto a la posición inicial
      const deltaX = currentX - initialMousePos.current.x;
      const deltaY = currentY - initialMousePos.current.y;

      // Aplicar limites basados en la diferencia
      targetRotation.current.x = THREE.MathUtils.clamp(deltaY * Math.PI * -0.3, -Math.PI * 0.4, Math.PI * 0.4);
      targetRotation.current.y = THREE.MathUtils.clamp(deltaX * Math.PI * 0.5, -Math.PI * 0.6, Math.PI * 0.6);
    };

    // Listener principal después de capturar posición inicial
    const timer = setTimeout(() => {
      window.addEventListener('mousemove', handleMouseMove);
    }, 100);

    return () => {
      window.removeEventListener('mousemove', handleInitialMouseMove);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    // Interpolación suave
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.1;
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.1;
  });

  return <primitive 
  ref={groupRef} object={scene} dispose={null} 
  rotation={[Math.PI * (15 / 180), Math.PI * (70 / 180), 0]}

  />;
}

export function TetoCorner() {
  return (
    <Canvas 
      camera={{ position: [2, 2, 8], fov: 88 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.8} />
      <directionalLight position={[0, 16, 30]} intensity={10} />
      <directionalLight position={[-60, 40, -50]} intensity={10} />
      <directionalLight position={[6, -10, -0]} intensity={10} />
      <TetoModel path="src/assets/3dModels/teto_pear.glb" />
    </Canvas>
  );
}
*/