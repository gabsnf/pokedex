import { useState } from "react";
import "./Specified.css";

export function Specified({ height }) {
  console.log(height);

  return (
    <div
      id="mold"
      style={{
        width: "50%",
        backgroundColor: "black",
        height: "400px",
      }}
    >
      {height}
    </div>
  );
}
