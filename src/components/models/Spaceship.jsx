import React, { useRef } from "react";
import { useBox } from "@react-three/cannon";
import {
  useGLTF,
  useTexture,
  Center,
} from "@react-three/drei";

export function Spaceship({
  scale = [1, 1, 1],
  position = [0, 0, 0],
}) {
  const { nodes } = useGLTF(
    "./models/spaceship_newnew.glb"
  );
  const bakedTexture = useTexture(
    "./models/new_baked.png"
  );
  console.log(nodes);
  bakedTexture.flipY = false;
  return (
    <>
      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>
      </Center>
    </>
  );
}

useGLTF.preload("./models/spaceship.glb");
