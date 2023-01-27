import { useBox } from "@react-three/cannon";
const Cube = ({
  position,
  scale = [10, 10, 10],
}) => {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 0,
    rotation: [Math.PI / -2, 0, 0],
    position: position,
    args: scale,
  }));

  return (
    <mesh ref={ref} position={position}>
      <boxGeometry args={scale} />
      <meshStandardMaterial
        transparent
        opacity={0}
      />
    </mesh>
  );
};

export default Cube;
