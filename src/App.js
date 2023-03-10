import { createPortal } from "react-dom";
import Underlined from "./components/Underlined";

function App() {
  const spans = document.getElementsByClassName("squiggleUnderlined");

  let squiggles = [];

  for (let span of spans) {
    const boundingRect = span.getBoundingClientRect();
    const style = {
      position: "absolute",
      top: `${boundingRect.bottom}px`,
      left: `${boundingRect.left}px`,
    };
    const width = boundingRect.right - boundingRect.left;
    const height = boundingRect.bottom - boundingRect.top;
    squiggles.push(
      createPortal(<Underlined width={width} style={style} />, span)
    );
  }

  return squiggles;
}

export default App;
