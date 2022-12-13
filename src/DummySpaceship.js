import React from "react";
import { useGLTF } from "@react-three/drei";

export function DummySpaceship(props) {
  const { nodes, materials } = useGLTF(
    "./models/dummySpaceship.gltf"
  );
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Cube.geometry}
        position={[0, 0.01, -0.01]}
        scale={[7.56, 7.56, 15.12]}
      >
        <meshDepthMaterial color={"white"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/dummySpaceship.gltf");
