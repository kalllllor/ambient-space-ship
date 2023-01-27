import React, { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import {
  glassMaterial,
  wallMaterial,
  floorMaterial,
  wallElementsMaterial,
  whiteLightMaterial,
} from "../../utils/Materials";

export function Spaceship(props) {
  //utils
  const setupMaterial = (
    name,
    emissive,
    intensity
  ) => {
    materials[name].emissive = new THREE.Color(
      emissive[0],
      emissive[1],
      emissive[2]
    );
    materials[name].emissiveIntensity = intensity;
    materials[name].toneMapped = false;
  };

  //setup
  const { nodes, materials } = useGLTF(
    "/models/spaceship_master-transformed.glb"
  );

  setupMaterial("light_roof", [1.5, 1, 2], 1);
  setupMaterial(
    "floor light inner",
    [0.2, 2, 0.2],
    1
  );
  setupMaterial("floor light", [2, 0.2, 0.2], 2);
  setupMaterial("green diode", [0.2, 2, 0.2], 1);
  setupMaterial("little light", [2, 0.2, 0.2], 3);

  //useframe and useRef
  const ventilationRef = useRef();
  useFrame((state, delta, xrFrame) => {
    if (Math.random() > 0.1) {
      setupMaterial(
        "green diode",
        [0.2, 2, 0.2],
        0.2
      );
    } else {
      setupMaterial(
        "green diode",
        [0.2, 4, 0.2],
        2
      );
    }
    if (Math.random() > 0.01) {
      setupMaterial("light_roof", [1.5, 1, 2], 1);
    } else {
      setupMaterial("light_roof", [1.5, 1, 2], 0);
    }
    ventilationRef.current.rotation.y += 0.05;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.floor_base.geometry}
        material={materials.floor}
      />
      <mesh
        geometry={
          nodes.floor_rectangles_base.geometry
        }
        material={materials["floor inside"]}
      />
      <mesh
        geometry={nodes.floor_rectangles.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.floor_base002.geometry}
        material={materials.floor}
      />
      <mesh
        geometry={
          nodes.floor_rectangles_base002.geometry
        }
        material={materials["floor inside"]}
      />
      <mesh
        geometry={
          nodes.floor_rectangles002.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.floor_base001.geometry}
        material={materials.floor}
      />
      <mesh
        geometry={
          nodes.floor_rectangles_base001.geometry
        }
        material={materials["floor inside"]}
      />
      <mesh
        geometry={
          nodes.floor_rectangles001.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.wall_base.geometry}
        material={materials.wall}
      />
      <mesh
        geometry={
          nodes.wall_supporter_high.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.wall_downside.geometry}
        material={materials.wall}
      />
      <mesh
        geometry={nodes.wall_supporter.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.light_supporter.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.wall_base002.geometry}
        material={materials.wall}
      />
      <mesh
        geometry={
          nodes.wall_supporter_high002.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.wall_downside002.geometry}
        material={materials.wall}
      />
      <mesh
        geometry={
          nodes.wall_supporter002.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={
          nodes.light_supporter002.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.wall_base001.geometry}
        material={materials.wall}
      />
      <mesh
        geometry={
          nodes.wall_supporter_high001.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.wall_downside001.geometry}
        material={materials.wall}
      />
      <mesh
        geometry={
          nodes.wall_supporter001.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={
          nodes.light_supporter001.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.gate001.geometry}
        material={nodes.gate001.material}
      />
      <mesh
        geometry={nodes.Cube.geometry}
        material={materials.rings}
        position={[-0.21, 0, 0.03]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials.wall}
      />
      <mesh
        ref={ventilationRef}
        geometry={nodes.Cube018.geometry}
        material={materials.rura}
        position={nodes.Cube018.position}
      />
      <mesh
        geometry={nodes.Cube020.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.Cube022.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.NurbsPath.geometry}
        material={materials.rura}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials.roof}
      />
      <mesh
        geometry={nodes.Cylinder.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials.roof}
      />
      <mesh
        geometry={nodes.Cylinder012.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.Cylinder013.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials.roof}
      />
      <mesh
        geometry={nodes.Cylinder006.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.toplight1.geometry}
        material={materials.light_roof}
      />
      <mesh
        geometry={nodes.floor_light.geometry}
        material={materials["floor light inner"]}
      />
      <mesh
        geometry={nodes.floor_light002.geometry}
        material={materials["floor light inner"]}
      />
      <mesh
        geometry={nodes.floor_light004.geometry}
        material={materials["floor light"]}
      />
      <mesh
        geometry={nodes.floor_light001.geometry}
        material={materials["floor light inner"]}
      />
      <mesh
        geometry={nodes.floor_light003.geometry}
        material={materials["floor light"]}
      />
      <mesh
        geometry={nodes.windowlight2.geometry}
        material={materials["little light"]}
      />
      <mesh
        geometry={
          nodes.ventilationlight3.geometry
        }
        material={materials["little light"]}
      />
      <mesh
        geometry={nodes.windowlight1.geometry}
        material={materials["little light"]}
      />
      <mesh
        geometry={nodes.wallgatebutton.geometry}
        material={materials["wall red diode"]}
      />
      <mesh
        geometry={nodes.wallgatebutton2.geometry}
        material={materials["wall red diode"]}
      />
      <mesh
        geometry={
          nodes.ventilationlight1.geometry
        }
        material={materials["floor light"]}
      />
      <mesh
        geometry={nodes.toplight2.geometry}
        material={materials.light_roof}
      />
      <mesh
        geometry={nodes.toplight3.geometry}
        material={materials.light_roof}
      />
      <mesh
        geometry={
          nodes.ventilationlight1001.geometry
        }
        material={materials["green diode"]}
      />
      <mesh
        geometry={nodes.glass.geometry}
        material={glassMaterial}
      />
      <mesh
        geometry={nodes.glass_right.geometry}
        material={glassMaterial}
      />
      <mesh
        geometry={nodes.glass_left.geometry}
        material={glassMaterial}
      />
      <mesh
        geometry={nodes.tablet.geometry}
        material={materials.tablet}
      />
      <mesh
        geometry={nodes.tablet001.geometry}
        material={materials.light_roof}
      />
      <mesh
        geometry={
          nodes.floor_ventilation.geometry
        }
        material={materials.KRATKA}
      />
      <mesh
        geometry={
          nodes.floor_ventilation_under.geometry
        }
        material={materials.rings}
      />
      <mesh
        geometry={nodes.Cube016.geometry}
        material={materials.rings}
      />
      <mesh
        geometry={nodes.Cube016_1.geometry}
        material={
          materials["ventilation blocker"]
        }
      />
    </group>
  );
}

useGLTF.preload(
  "/models/spaceship_master-transformed.glb"
);
