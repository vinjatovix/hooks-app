import React, { useMemo, useState } from "react";
import { useCounter } from "../../hooks/useCounter";

import "./examples.css";
import { procesoPesado } from "../../helpers/procesoPesado";

export const MemoHook = () => {
  const { counter, increment } = useCounter(200);
  const [show, setShow] = useState(true);

  //? Memoriza el resultado de algo (proceso pesado) y solo si cambia el valor se vuelve a renderizar
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);
  //? Gracias a la memorización el cambio del botón no dispara el render
  return (
    <div>
      <h1>
        MemoHook Counter: <small>{counter}</small>
      </h1>
      <p>{memoProcesoPesado}</p>
      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>{" "}
      <button
        className="btn btn-outline-primary"
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
