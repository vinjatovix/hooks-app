import React, { useRef } from "react";
import "./useRef.css";

export const FocusScreen = () => {
  const inputRef = useRef();


  //? Este hook nos puede servir para hacer una referencia mutable, se puede cambiar la referencia sin necesidad de disparar un nuevo render
  const handleClick = () => {
    inputRef.current.select();

  }; 
  return (
    <div>
      <h1>Hola</h1>
      <hr />
      <input
        ref={inputRef}
        className="form-control"
        placeholder="Su nombre"
      ></input>
      <button className="btn btn-primary mt-5" onClick={handleClick}>
        Focus
      </button>
    </div>
  );
};
