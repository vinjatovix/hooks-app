import React, { useState } from "react";
import "./counter.css";

export default function CounterApp() {
  const [state, setCounter] = useState({
    counter1: 1337,
    counter2: 0,
    counter3: 330,
    counter4: 130,
  });
  const { counter1, counter2 } = state;
  return (
    <>
      <h1>Counter 1 {counter1}</h1>
      <h1>Counter 2 {counter2}</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setCounter({ ...state, counter1: counter1 + 1 });
        }}
      >
        +1
      </button>{" "}
      {/* <button
        className="btn btn-primary"
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -1
      </button> */}
    </>
  );
}
