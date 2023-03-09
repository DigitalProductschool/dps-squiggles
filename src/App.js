import { createPortal } from "react-dom";
import Underlined from "./components/Underlined";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const div1 = document.getElementById("portal1");
  const div2 = document.getElementById("portal2");

  const spans = document.getElementsByClassName("squiggleUnderlined");

  let result = [];
  if (div1) {
    result.push(createPortal(<Underlined width={219} stroke="#FBCA04" />, div1));
  }

  if (div2) {
    result.push(createPortal(<Underlined width={360} />, div2));
  }

  for (let span of spans) {
    const boundingRect = span.getBoundingClientRect();
    const style = {
      top: `${boundingRect.bottom}px`,
      left: `${boundingRect.left}px`,
    };
    const width = boundingRect.right - boundingRect.left;
    const height = boundingRect.bottom - boundingRect.top;
    result.push(createPortal(<Underlined width={width} style={style} />, span));
  }

  return result;
}

export default App;
