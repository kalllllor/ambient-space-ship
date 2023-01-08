import { Canvas } from "@react-three/fiber";
import {
  Loader,
  PointerLockControls,
} from "@react-three/drei";
import {
  Physics,
  Debug,
} from "@react-three/cannon";
import Lights from "../components/Lights.js";
import Floor from "../components/Floor.js";

const BasicScene = ({ children }) => {
  return (
    <>
      <Canvas camera={{ fov: 50 }}>
        <color
          args={["#000000"]}
          attach="background"
        />
        <Lights />
        <Physics gravity={[0, -9.8, 0]}>
          <Debug color="black" scale={1.1}>
            {children}
          </Debug>
        </Physics>
        {/* <PointerLockControls /> */}
      </Canvas>
      <Loader />
    </>
  );
};

export default BasicScene;
