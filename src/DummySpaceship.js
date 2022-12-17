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
        position={props.position}
        scale={props.scale}
      >
        <meshDepthMaterial color={"white"} />
      </mesh>
    </group>
  );
}

useGLTF.preload("/dummySpaceship.gltf");
