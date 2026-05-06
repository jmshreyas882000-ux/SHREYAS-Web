import { Canvas } from "@react-three/fiber";
import { OrbitControls, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Particles() {
  const ref = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, []);

  useFrame(() => {
    ref.current.rotation.y += 0.0005;
  });

  return (
    <Points ref={ref} positions={particles} stride={3}>
      <PointMaterial
        transparent
        color="#00ffff"
        size={0.2}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}

function GlowSphere() {
  return (
    <mesh>
      <sphereGeometry args={[3, 32, 32]} />
      <meshStandardMaterial
        color="#00ffff"
        emissive="#00ffff"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 20] }} style={{ position: "fixed", zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />

      <Particles />
      <GlowSphere />

      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
