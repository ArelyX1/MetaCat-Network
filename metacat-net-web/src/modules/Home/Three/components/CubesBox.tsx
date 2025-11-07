import * as THREE from 'three'
import { useRef, useMemo, useLayoutEffect, useEffect } from 'react'
import { Canvas, extend, type ThreeElement } from '@react-three/fiber'
import { shaderMaterial, useProgress } from '@react-three/drei'
import { useLoader } from '@react-three/fiber'
import { Html, Circle, Stats } from '@react-three/drei'
import niceColors from 'nice-color-palettes'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'


function Loader() {
  const { progress } = useProgress()
  console.log(progress)
  return <Html center> {progress} % loaded </Html>
}

interface BoxesProps {
  length: number;
  size: [number, number, number];
  separation: number;
}


declare module '@react-three/fiber' {
  interface ThreeElements {
    meshEdgesMaterial: ThreeElement<typeof MeshEdgesMaterial> & {
      length?: number;
      size?: [number, number, number] | number[];
      thickness?: number;
      smoothness?: number;
      color?: string | number;
    };
  }
}


declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshEdgesMaterial: THREE.MeshBasicMaterialParameters & {
        size?: [number, number, number] | number[];
        thickness?: number;
        smoothness?: number;
      };
    }
  }
}
const MeshEdgesMaterial = shaderMaterial(
  {
    color: new THREE.Color('white'),
    size: new THREE.Vector3(15, 15, 15),
    thickness: 1.01,
    smoothness: 0.2
  },
  /*glsl*/ `varying vec3 vPosition;
  void main() {
    vPosition = position;
    gl_Position = projectionMatrix * viewMatrix * instanceMatrix * vec4(position, 1.0);
  }`,
  /*glsl*/ `varying vec3 vPosition;
  uniform vec3 size;
  uniform vec3 color;
  uniform float thickness;
  uniform float smoothness;
  void main() {
    vec3 d = abs(vPosition) - (size * 0.5);
    float a = smoothstep(thickness, thickness + smoothness, min(min(length(d.xy), length(d.yz)), length(d.xz)));
    gl_FragColor = vec4(color, 1.0 - a);
  }`
)

extend({ MeshEdgesMaterial })
const o = new THREE.Object3D()
const c = new THREE.Color()

function Boxes({ length, size, separation, ...props }: BoxesProps) {
  const ref = useRef<THREE.InstancedMesh>(null)
  const outlines = useRef<any>(null)
  
  const colors = useMemo(() => new Float32Array(Array.from({ length }, () => c.set(niceColors[9][Math.floor(Math.random() * 5)]).toArray()).flat()), [length])
  useLayoutEffect(() => {
    if(!ref.current) return
    let i = 0
    const root = Math.round(Math.pow(length, 1 / 3))
    const halfRoot = root / 2
    for (let x = 0; x < root; x++)
      for (let y = 0; y < root; y++)
        for (let z = 0; z < root; z++) {
          const id = i++
          o.rotation.set(Math.random(), Math.random(), Math.random())
          o.position.set((halfRoot - x)*separation + Math.random(), (halfRoot - y)*separation + Math.random(), (halfRoot - z)*separation + Math.random())
          o.updateMatrix()
          ref.current.setMatrixAt(id, o.matrix)
        }
    ref.current.instanceMatrix.needsUpdate = true
    // Re-use geometry + instance matrix
    outlines.current.geometry = ref.current.geometry
    outlines.current.instanceMatrix = ref.current.instanceMatrix
  }, [length])
  
  return (
    <group {...props}>
      <instancedMesh ref={ref} args={[null as unknown as THREE.BufferGeometry, null as unknown as THREE.Material, length]}>
        <boxGeometry args={size as [number, number, number]}>
          <instancedBufferAttribute attach="attributes-color" args={[colors, 3]} />
        </boxGeometry>
        <meshLambertMaterial vertexColors toneMapped={false} />
      </instancedMesh>
      <instancedMesh ref={outlines} args={[null as unknown as THREE.BufferGeometry, null as unknown as THREE.Material, length]}>
        <meshEdgesMaterial transparent polygonOffset polygonOffsetFactor={-10} size={size as [number, number, number]} color="black" thickness={0.001} smoothness={0.005} />
      </instancedMesh>
    </group>
  )
}

export function CubesBox({ length, size, separation }: BoxesProps) {
  const controlsRef = useRef<any>(null)
  const target = useRef(new THREE.Vector3(0,0,0))
  useEffect(() => {
    let timeout: any = null
    const handleMove = (e: MouseEvent) => {
      if (controlsRef.current) {
        controlsRef.current.autoRotate = true
        // Mapea el mouse a un rango razonable para el objetivo
        const mx = (e.clientX / window.innerWidth - 0.5) * 15 // ajusta sensibilidad X
        const my = (e.clientY / window.innerHeight - 0.5) * 10 // ajusta sensibilidad Y
        target.current.set(mx*-1, my*-1, (mx + my) / 10) // ajusta Z basado en X e Y
        controlsRef.current.target.copy(target.current)
        controlsRef.current.update()
      }
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        if (controlsRef.current) controlsRef.current.autoRotate = true
      }, 800)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [])

  return (
    <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.85} />
        <directionalLight position={[150, 150, 150]} intensity={1} />
        <Boxes length={length} size={size} separation={separation}/>
        <OrbitControls
          ref={controlsRef}
          target={[0, 0, 0]}
          autoRotate={true}
          autoRotateSpeed={1.5}
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
        />
    </Canvas>
  )
}