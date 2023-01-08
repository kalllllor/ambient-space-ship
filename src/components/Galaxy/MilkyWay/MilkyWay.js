import {
  Sparkles,
  Center,
  useTexture,
  useGLTF,
} from "@react-three/drei";

const MilkyWay = () => {
  return (
    <Center>
      <Sparkles count={1000} scale={[2, 2, 10]} />
    </Center>
  );
};

export default MilkyWay;
