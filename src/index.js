import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";

const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <Canvas
    camera={{
      fov: 45,
      near: 5,
      far: 200,
      position: [0, 2, 10],
    }}
  >
    <Experience />
  </Canvas>
);
