import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Robot() {
  const { scene } = useGLTF("/models/robot.glb");
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.003;
    ref.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
  });

  return <primitive ref={ref} object={scene} scale={2} />;
}
