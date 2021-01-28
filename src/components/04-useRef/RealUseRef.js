import React, { useState } from "react";
import { MultipleCustomHooks } from "../03-examples/MultipleCustomHooks";
import "./useRef.css";

export const RealUseRef = () => {
  const [show, setshow] = useState(false);
  return (
    <div>
      <h1>RealUseRef</h1>
      <hr />
      {show && <MultipleCustomHooks />}
      <button className="btn btn-primary mt-5" onClick={() => setshow(!show)}>
        Show/Hide
      </button>
    </div>
  );
};
