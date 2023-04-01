import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import neptuneTexture from "../../../assets/textures/planets/eris.jpg";

const Neptun = () => {
  const map = useTexture(neptuneTexture);
  const neptunRef = useRef();

  const amplitude = 70;
  const factor = 0.2;
  let a = 0;
  useFrame(({ clock }) => {
    neptunRef.current.rotation.y += 0.001;

    a += 0.05;
    console.log(a);
    neptunRef.current.position.x =
      600 + amplitude * Math.sin(a * factor);

    neptunRef.current.position.y =
      amplitude * 0.3 * Math.cos(a * factor);

    neptunRef.current.position.z =
      amplitude * Math.cos(a * factor);
  });

  return (
    <mesh ref={neptunRef} position={[600, 0, 0]}>
      <sphereGeometry args={[30, 16, 16]} />
      <meshStandardMaterial map={map} />
    </mesh>
  );
};

export default Neptun;
