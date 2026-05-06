import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Torus() {
  return (
    <mesh rotation={[10, 15, 0]}>
      <torusGeometry args={[3, 1, 16, 100]} />
      <meshStandardMaterial color="cyan" wireframe />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas style={{ position: "fixed", zIndex: -1 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Torus />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
