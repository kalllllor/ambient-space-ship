import { usePlane } from "@react-three/cannon";

const Floor = ({
  scale = 100,
  position = [0, 0, 0],
}) => {
  const [ref] = usePlane((index) => ({
    type: "Static",
    mass: 0,
    rotation: [Math.PI / -2, 0, 0],
    position: position,
    scale: scale,
  }));

  return (
    <mesh ref={ref} scale={scale}>
      <planeGeometry />
      <meshStandardMaterial
        transparent
        opacity={0}
      />
    </mesh>
  );
};

export default Floor;
