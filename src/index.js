import React from "react";
import { createRoot } from "react-dom/client";
import Underlined from "./components/Underlined";

function addSquiggles() {
  const squiggles = document.querySelectorAll(".dps-squiggle");

  squiggles.forEach((span) => {
    const style = {
      position: "absolute",
      top: `${span.offsetTop+span.offsetHeight}px`,
      left: `${span.offsetLeft}px`,
    };
    const width = span.offsetWidth;

    const root = createRoot(span);
    root.render(
      <>
        {span.innerHTML}
        <Underlined width={width} style={style} />
      </>
    );
  });
}

document.addEventListener("DOMContentLoaded", addSquiggles, false);
