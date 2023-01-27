import "./style.css";
import ReactDOM from "react-dom/client";
import Experience from "./Experience.js";
import BasicScene from "./ui/BaseScene";
const root = ReactDOM.createRoot(
  document.querySelector("#root")
);

root.render(
  <BasicScene>
    <Experience />
  </BasicScene>
);
