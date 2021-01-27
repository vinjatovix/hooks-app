import React from "react";
import { useCounter } from "../../hooks/useCounter";
import "./counter.css";

export const CounterWithCustomHook = () => {
  const { state, increment, decrement, reset } = useCounter();
  return (
    <>
      <h1>Counter with custom Hook: {state}</h1>
      <button onClick={() => increment(2)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        reset
      </button>
      <button onClick={() => decrement(2)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};
