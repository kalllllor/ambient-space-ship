import { Canvas } from "@react-three/fiber";
import {
  Loader,
  PointerLockControls,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Lights from "../components/Lights.js";
import Floor from "../components/Floor.js";

const BasicScene = ({ children }) => {
  return (
    <>
      <Canvas camera={{ fov: 50 }}>
        <Lights />
        <Physics gravity={[0, -9.8, 0]}>
          {children}
          <Floor
            rotation={[Math.PI / -2, 0, 0]}
            color="green"
          />
        </Physics>
        <PointerLockControls />
      </Canvas>
      <Loader />
    </>
  );
};

export default BasicScene;
