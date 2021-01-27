import React, { useEffect, useState } from "react";
import "./effects.css";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
  });

  const { name, email } = formState;
  //? TIP: Es posible que a veces quieras ejecutar efectos para cosas concretas del state, desde react aconsejan un hook para cada cosa.
  useEffect(() => {
    console.log("Se monta el componente");
  }, []);

  useEffect(() => {
    console.log("cambia el nombre");
  }, [name]);

  useEffect(() => {
    console.log("cambia el email");
  }, [email]);
  const handleInputChange = ({ target }) => {
    //? TIP: En vez de recibir el evento se des-estructura el target
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };
  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="123"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Introduce tu email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        ></input>
      </div>

      {name === '123' && <Message />}
    </>
  );
};
