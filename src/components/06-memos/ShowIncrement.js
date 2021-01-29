import React from "react";

//? este Memo nos evita la dependencia de counter en el callback
export const ShowIncrement = React.memo(({ increment }) => {
  console.log("regenerado");
  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Incrementar
    </button>
  );
});
