import React, { useCallback, useEffect, useState } from "react";
import "./examples.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  //? Cada vez que se renderiza el componente este callback se vuelve a crear,
  //? con este hook lo evitamos,
  const increment = useCallback(
    (num) => {
      //? eliminamos la dependencia counter del array con c
      setCounter((c) => c + num);
    },
    [setCounter]
  );

  //? cuando la dependencia de un use effect también es una función compensa usar este hook
  useEffect(() => {
    //??? Gracias al hook este efecto no se dispara porque no se vuelve a crear la función
  }, [increment]);
  return (
    <div>
      <h1>
        useCallback Hook: <small>{counter}</small>
      </h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  );
};
