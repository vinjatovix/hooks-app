import React from "react";

//? memoriza algo y solo si sus propiedades cambian va a renderizar
export const Small = React.memo(({ value }) => {
  console.log("im exposed");
  return <small>{value} </small>;
});
