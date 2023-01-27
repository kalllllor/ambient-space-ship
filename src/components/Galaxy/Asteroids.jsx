import {
  useLayoutEffect,
  useEffect,
} from "react";
import * as THREE from "three";
import {
  useThree,
  useFrame,
} from "@react-three/fiber";

import { useTexture } from "@react-three/drei";

const parameters = {
  count: 5000,
  size: 1,
  radius: 150,
  radiusRandomness: 150,
};

let geometry = null;
let material = null;
let points = null;

function Asteroids() {
  const { scene } = useThree();
  const asteroidsMap = useTexture(
    "/textures/asteroid.png"
  );

  useFrame((state, delta, xrFrame) => {
    points.rotation.y += 0.0001;
  });
  useLayoutEffect(() => {
    points.rotation.z = Math.PI / 24;
  }, []);

  const generateGalaxy = () => {
    if (points) {
      geometry.dispose();
      material.dispose();
      scene.remove(points);
    }

    /* Geometry */
    geometry = new THREE.BufferGeometry();
    const position = new Float32Array(
      parameters.count * 3
    );

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;
      const randomVal = Math.random();
      position[i3] =
        parameters.radius *
          Math.cos(randomVal * 10) +
        (Math.random() - 0.5) *
          parameters.radiusRandomness;
      position[i3 + 1] =
        (Math.random() - 0.5) * 15;
      position[i3 + 2] =
        parameters.radius *
          Math.sin(randomVal * 10) +
        (Math.random() - 0.5) *
          parameters.radiusRandomness;
    }

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(position, 3)
    );

    /* Materials */
    material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      color: new THREE.Vector3(0, 0, 0),
      blending: THREE.AdditiveBlending,
      alphaMap: asteroidsMap,
      map: asteroidsMap,
      alphaTest: 0.001,
    });

    /* Points */
    points = new THREE.Points(geometry, material);
    scene.add(points);
  };

  generateGalaxy();

  return null;
}

export default Asteroids;
