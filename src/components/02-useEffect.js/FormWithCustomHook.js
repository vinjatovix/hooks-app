import React from "react";
import { useForm } from "../../hooks/useForm";
import "./effects.css";

export const FormWithCustomHook = () => {
  const [formState, handleInputChange] = useForm({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formState;

  const handlerSubmit = (e) => {
    e.preventDefault();

    console.log(formState);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <h1>ForWithCustomHook</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Nombre"
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
      </div>{" "}
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="****"
          value={password}
          onChange={handleInputChange}
        ></input>
      </div>
      <button type="submit" className="btn btn-primary">
        enviar
      </button>
    </form>
  );
};
