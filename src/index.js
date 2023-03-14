import React from "react";
import { createRoot } from "react-dom/client";
import ResponsiveSquiggle from "./components/ResponsiveSquiggle";

function addSquiggles() {
  const squiggles = document.querySelectorAll(".dps-squiggle");

  squiggles.forEach((element) => {
    const root = createRoot(element);
    root.render(
      <>
        {element.innerHTML}
        <ResponsiveSquiggle type={element.dataset.type} domElement={element} />
      </>
    );
  });
}

document.addEventListener("DOMContentLoaded", addSquiggles, false);
