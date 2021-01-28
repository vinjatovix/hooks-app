import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./examples.css";

export const Layout = () => {
  const { counter, increment } = useCounter(1);
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { quote } = !!data && data[0];
  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect()); //?Esto nos sirve por ejemplo para medir un componente despues de que algo cambie o se renderice el html
    return () => {};
  }, [quote]);

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">
        <p ref={pTag} className="mb-0">
          {quote}
        </p>
      </blockquote>

      <button className="btn btn-primary" onClick={increment}>
        Next quote
      </button>
      <pre>{JSON.stringify(boxSize, null, 3)} </pre>
    </div>
  );
};
