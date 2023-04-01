import { useLayoutEffect } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import {
  useThree,
  useFrame,
} from "@react-three/fiber";

const parameters = {
  count: 1500,
  size: 1,
  radius: 120,
  radiusRandomness: 170,
  size: 0.7,
};

let geometry = null;
let material = null;
let asteroids = new THREE.Group();

const gltfloader = new GLTFLoader();
let asteroidGeo = null;
gltfloader.load(
  "/models/asteroid_lowpoly.glb",
  (gltf) => {
    asteroidGeo = gltf.scene.children[0].geometry;
  }
);

function Asteroids() {
  const { scene } = useThree();
  useFrame((state, delta, xrFrame) => {
    asteroids.children.forEach(function (obj) {
      obj.rotation.x -= obj.r.x;
      obj.rotation.y -= obj.r.y;
      obj.rotation.z -= obj.r.z;
    });

    asteroids.rotation.y += 0.0001;
  });
  useLayoutEffect(() => {
    generateAsteroids();
  }, []);

  const generateAsteroids = () => {
    material = new THREE.MeshStandardMaterial({
      color: "#aaaaaa",
      roughness: 0.8,
      metalness: 1,
    });

    for (let i = 0; i < parameters.count; i++) {
      const cube = new THREE.Mesh(
        asteroidGeo,
        material
      );
      const randomVal = Math.random();
      cube.position.x =
        parameters.radius *
          Math.cos(randomVal * 10) +
        (Math.random() - 0.5) *
          parameters.radiusRandomness;
      cube.position.y =
        (Math.random() - 0.5) * 15;
      cube.position.z =
        parameters.radius *
          Math.sin(randomVal * 10) +
        (Math.random() - 0.5) *
          parameters.radiusRandomness;

      cube.r = {};
      cube.r.x = Math.random() * 0.002;
      cube.r.y = Math.random() * 0.002;
      cube.r.z = Math.random() * 0.002;

      cube.scale.set(
        1 + Math.random() * 0.4,
        1 + Math.random() * 0.8,
        1 + Math.random() * 0.4
      );
      cube.scale.set(
        randomVal * parameters.size,
        randomVal * parameters.size,
        randomVal * parameters.size
      );

      asteroids.add(cube);
    }
  };

  scene.add(asteroids);

  return null;
}

export default Asteroids;
