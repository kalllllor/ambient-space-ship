import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import sunTexture from "../../../assets/textures/planets/eris.jpg";

const Sun = () => {
  const map = useTexture(sunTexture);
  const sunref = useRef();
  useFrame(({ clock }) => {
    sunref.current.rotation.y += 0.001;
  });
  const emissiveColor = {
    isColor: true,
    r: 1.5,
    g: 1,
    b: 2,
  };
  return (
    <mesh position={[600, 0, 0]} ref={sunref}>
      <sphereGeometry args={[50, 24, 24]} />
      <meshStandardMaterial
        emissive={emissiveColor}
        emissiveIntensity={5}
        toneMapped={false}
        map={map}
      />
    </mesh>
  );
};

export default Sun;
