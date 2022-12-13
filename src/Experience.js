import { OrbitControls } from "@react-three/drei";
import { DummySpaceship } from "./DummySpaceship";
import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
const Experience = () => {
  const { gl } = useThree();
  useEffect(() => {
    console.log(gl);
    gl.setClearColor(0xaaaaaaa, 0);
  });
  return (
    <>
      <OrbitControls enableDamping makeDefault />
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />
      <DummySpaceship />
    </>
  );
};
export default Experience;
