import { Canvas } from "@react-three/fiber";
import {
  Loader,
  Environment,
  PointerLockControls,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Lights from "../components/Lights.js";
import NightSky from "../assets/environmentMaps/space.hdr";
import { EffectComposer } from "@react-three/postprocessing";

const BasicScene = ({ children }) => {
  return (
    <>
      <Canvas camera={{ fov: 50 }}>
        <color
          args={["#000000"]}
          attach="background"
        />
        <Environment
          files={NightSky}
          background
        />
        <Lights />
        <Physics gravity={[0, -9.8, 0]}>
          {children}
        </Physics>
        <PointerLockControls />
      </Canvas>
      <Loader />
    </>
  );
};

export default BasicScene;
