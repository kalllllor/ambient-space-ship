import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { Spaceship } from "./components/models/Spaceship";
import BaseCharacter from "./ui/BaseCharacter";
import Galaxy from "./components/Galaxy/Galaxy";
import Floor from "./components/Floor";
import Cube from "./components/Cube";
import {
  EffectComposer,
  Bloom,
  Noise,
  Vignette,
} from "@react-three/postprocessing";
const Experience = () => {
  return (
    <>
      <BaseCharacter
        controls
        position={[0, 3, 0]}
        args={[2]}
        color="yellow"
      />
      <EffectComposer>
        <Noise opacity={0.05} />
        <Vignette
          eskil={false}
          offset={0.1}
          darkness={1.2}
        />
        <Bloom mipmapBlur />
      </EffectComposer>
      {/* <OrbitControls makeDefault /> */}
      <Suspense fallback={null}>
        <Spaceship />
      </Suspense>
      {/*boundaries for movement */}
      <Floor />
      <Cube
        scale={[5, 30, 5]}
        position={[7.5, 3.5, 0]}
      />
      <Cube
        scale={[5, 30, 5]}
        position={[-7.5, 3.5, 0]}
      />
      <Cube
        scale={[10, 5, 5]}
        position={[0, 3.5, 17]}
      />
      <Cube
        scale={[10, 5, 5]}
        position={[0, 3.5, -17]}
      />
      <Galaxy />
    </>
  );
};

export default Experience;
