import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

export function TetoPear({ path }: { path: string }) {
  const { scene } = useGLTF(path);
  const group = useRef<THREE.Group>(null);
  scene.scale.set(0.5, 0.5, 0.5);
  return <primitive ref={group} object={scene} dispose={null} />;
}