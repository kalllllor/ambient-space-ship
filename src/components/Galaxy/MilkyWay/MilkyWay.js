import {
  Sparkles,
  Center,
  useTexture,
  useGLTF,
} from "@react-three/drei";

const MilkyWay = () => {
  return (
    <Sparkles
      count={2000}
      scale={[7, 7, 20]}
      position={[0, 1.5, 0]}
    />
  );
};

export default MilkyWay;
