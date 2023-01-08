import {
  usePlane,
  Debug,
  useBox,
} from "@react-three/cannon";

const Floor = (props) => {
  const [ref] = useBox((index) => ({
    type: "Static",
    mass: 0,
    rotation: [Math.PI / -2, 0, 0],
    scale: [1, 1, 1],
  }));

  return (
    <mesh
      receiveShadow
      rotation={props.rotation}
      ref={ref}
    >
      <planeGeometry scale={[1, 1, 1]} />
      <meshStandardMaterial color={props.color} />
    </mesh>
  );
};

export default Floor;
