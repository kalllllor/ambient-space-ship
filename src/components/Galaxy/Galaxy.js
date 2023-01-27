import MilkyWay from "./MilkyWay/MilkyWay";
import Sun from "./Planet/Sun";
import Neptun from "./Planet/Neptun";
import Asteroids from "./Asteroids";

const Galaxy = () => {
  return (
    <>
      <Asteroids />
      <Sun />
      <Neptun />
      <MilkyWay />
    </>
  );
};
export default Galaxy;
