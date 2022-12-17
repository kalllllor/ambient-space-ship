import { DummySpaceship } from "./DummySpaceship";
import BaseScene from "./ui/BaseScene";
import BaseCharacter from "./ui/BaseCharacter";

const Experience = () => {
  return (
    <BaseScene>
      <BaseCharacter
        controls
        position={[0, 2, 0]}
        args={[0.5]}
        color="yellow"
      />
      <DummySpaceship
        position={[0, 0, 0]}
        scale={[2, 2, 2]}
      />
    </BaseScene>
  );
};

export default Experience;
