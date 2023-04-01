import { Canvas } from "@react-three/fiber";
import {
  Loader,
  Environment,
  PointerLockControls,
} from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import Lights from "../components/Lights.js";
import NightSky from "../assets/environmentMaps/space.hdr";

import useCapture from "use-capture";

import "./style.css";
const BasicScene = ({ children }) => {
  const [bind, startRecording, isRecording] =
    useCapture({
      duration: 10,
      fps: 30,
    });

  return (
    <div className="wrapper">
      <button
        className="recording"
        onClick={startRecording}
      >
        {isRecording
          ? "Recording..."
          : "Start Recording"}
      </button>
      <Canvas
        camera={{ fov: 50 }}
        onCreated={bind}
        gl={{
          preserveDrawingBuffer: true,
        }}
      >
        <color
          args={["#000000"]}
          attach="background"
        />
        <Environment
          files={NightSky}
          background
        />
        <Lights />
        <Physics gravity={[0, -9.8, 0]}>
          {children}
        </Physics>
        <PointerLockControls />
      </Canvas>
      <Loader />
    </div>
  );
};

export default BasicScene;
