import { useRef, useEffect } from "react";
import * as THREE from "three";
import { useHelper } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

const Lights = () => {
  const { scene } = useThree();

  const spotLightRef = useRef();
  const spotLightInteriorRef = useRef();
  const sunLightTarget = new THREE.Object3D();

  useEffect(() => {
    scene.add(sunLightTarget);
    spotLightRef.current.target = sunLightTarget;
    sunLightTarget.position.set(1000, 0, 0);
  }, [spotLightRef]);

  useHelper(
    spotLightRef,
    THREE.SpotLightHelper,
    "cyan"
  );

  return (
    <>
      <spotLight
        position={[0, 4.5, 0]}
        intensity={2}
        angle={Math.PI / 3}
        decay={10}
        distance={10}
        ref={spotLightRef}
      />

      <ambientLight intensity={0.1} />
      <spotLight
        ref={spotLightRef}
        intensity={1}
        angle={Math.PI / 20}
        rotation={[Math.PI / 2, 0, 0]}
        position={[590, 0, 0]}
        decay={0.1}
      />
      <spotLight
        penumbra={0.5}
        intensity={0.5}
        position={[10, 10, 5]}
        castShadow
      />
    </>
  );
};

export default Lights;
