import React from "react";
import { createRoot } from "react-dom/client";
import Underlined from "./components/Underlined";

const squiggles = document.querySelectorAll(".dps-squiggle");

squiggles.forEach((span) => {
  const boundingRect = span.getBoundingClientRect();
  const style = {
    position: "absolute",
    top: `${boundingRect.bottom}px`,
    left: `${boundingRect.left}px`,
  };
  const width = boundingRect.right - boundingRect.left;
  //const height = boundingRect.bottom - boundingRect.top;

  const root = createRoot(span);
  root.render(
    <>
      {span.innerHTML}
      <Underlined width={width} style={style} />
    </>
  );
});
