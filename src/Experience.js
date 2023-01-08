import { useState } from "react";
import { OrbitControls } from "@react-three/drei";

import { Spaceship } from "./components/models/Spaceship";
import BaseScene from "./ui/BaseScene";
import BaseCharacter from "./ui/BaseCharacter";
import Galaxy from "./components/Galaxy/Galaxy";

const Experience = () => {
  return (
    <>
      <BaseScene>
        {/* <BaseCharacter
            controls
            position={[0, 2, 0]}
            args={[0.5]}
            color="yellow"
          /> */}
        <OrbitControls makeDefault />
        <Spaceship
          position={[0, 0, 0]}
          scale={[0.5, 0.5, 0.5]}
        />
        <Galaxy />
      </BaseScene>
    </>
  );
};

export default Experience;
