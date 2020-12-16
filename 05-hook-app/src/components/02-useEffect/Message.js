import React, {useEffect, useState} from 'react';

export const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const {x, y} = coords;

  const mouseMove = (event) => {
    const coords = {x: event.x, y: event.y};
    setCoords(coords);
  };

  useEffect(() => {
    window.addEventListener('mousemove', mouseMove);

    return () => {
      console.log('Componente Desmontado');
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <>
      <h3>Aprender React!</h3>
      <p>
        x:{x} y:{y}
      </p>
    </>
  );
};
