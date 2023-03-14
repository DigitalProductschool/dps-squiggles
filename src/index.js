import React from "react";
import { createRoot } from "react-dom/client";
import ResponsiveSquiggle from "./components/ResponsiveSquiggle";

function addSquiggles() {
  const squiggles = document.querySelectorAll(".dps-squiggle");

  squiggles.forEach((span) => {
    const root = createRoot(span);
    root.render(
      <>
        {span.innerHTML}
        <ResponsiveSquiggle type="underlined" domElement={span} />
      </>
    );
  });
}

document.addEventListener("DOMContentLoaded", addSquiggles, false);

/* todo: re-position on window-resize */
