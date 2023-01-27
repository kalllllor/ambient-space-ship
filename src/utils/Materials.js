import * as THREE from "three";
import {
  useGLTF,
  useTexture,
} from "@react-three/drei";
import gradient3 from "../assets/textures/gradient/3.jpg";
import { ToneMapping } from "three";

const textureLoader = new THREE.TextureLoader();
const gradientTexture =
  textureLoader.load(gradient3);
gradientTexture.minFilter = THREE.NearestFilter;
gradientTexture.magFilter = THREE.NearestFilter;
gradientTexture.generateMipmaps = false;

export const glassMaterial =
  new THREE.MeshBasicMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    opacity: 0,
  });

export const floorMaterial =
  new THREE.MeshStandardMaterial({
    shininess: 0,
    side: THREE.DoubleSide,
    color: "#1f1f1f",
  });

export const wallMaterial =
  new THREE.MeshStandardMaterial({
    shininess: 0,
    side: THREE.DoubleSide,
    color: "#3c00c9",
  });

export const toonMaterial =
  new THREE.MeshToonMaterial({
    gradientMap: gradientTexture,
    side: THREE.DoubleSide,
  });

export const wallElementsMaterial =
  new THREE.MeshStandardMaterial({
    shininess: 0.5,
    side: THREE.DoubleSide,
    color: "#3cffff",
  });

export const whiteLightMaterial =
  new THREE.MeshStandardMaterial({
    color: [1.5, 1, 2],
  });
