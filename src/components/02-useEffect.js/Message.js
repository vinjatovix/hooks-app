import React, { useEffect, useState } from "react";

export const Message = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      console.log("recurso");
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    };
    window.addEventListener("mousemove", mouseMove);

    console.log("Componente montado");
    return () => {
      console.log("Componente desmontado");
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  return (
    <div>
      <h3>Para desmontar y limpiar</h3>
      <p>
        Este componente consume recursos cada vez que se monta, por eso
        necesitamos el return del useEffect para limpiar en el desmontaje.
      </p>
      <p>
        Coordenadas del ratón: x:{x} y:{y}
      </p>
    </div>
  );
};
