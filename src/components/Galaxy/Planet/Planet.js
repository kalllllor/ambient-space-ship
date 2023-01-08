import { useTexture } from "@react-three/drei";
import neptuneTexture from "../../../assets/textures/planets/neptune.jpg";
import {
  EffectComposer,
  Bloom,
} from "@react-three/postprocessing";

const Planet = () => {
  const planet = "Saturn";
  const map = useTexture(neptuneTexture);
  return (
    <mesh>
      <sphereGeometry />
      <meshStandardMaterial
        color="rgb(10, 20, 30)"
        map={map}
      />
    </mesh>
  );
};

export default Planet;
