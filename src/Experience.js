import {
  OrbitControls,
  TransformControls,
  PivotControls,
  Html,
  MeshReflectorMaterial,
  MeshWobbleMaterial,
} from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
  const boxRef = useRef(null);
  const sphereRef = useRef(null);

  return (
    <>
      <OrbitControls enableDamping makeDefault />
      <directionalLight
        position={[1, 2, 3]}
        intensity={1.5}
      />
      <ambientLight intensity={0.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
      >
        <mesh position-x={-2} ref={sphereRef}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
      </PivotControls>

      <mesh
        position-x={2}
        scale={1.5}
        ref={boxRef}
      >
        <boxGeometry />
        <Html
          position={[0, 0.5, 0]}
          distanceFactor={8}
          wrapperClass="label"
          center
          occlude={[boxRef, sphereRef]}
        >
          Hehe XD
        </Html>
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
      <TransformControls
        object={boxRef}
      ></TransformControls>

      <mesh
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <MeshWobbleMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
