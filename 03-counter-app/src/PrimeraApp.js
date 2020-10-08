import React from 'react';

// Functional Component

const PrimeraApp = () => {
  // const saludo = {
  //   nombre: 'anbreaker',
  //   edad: 34,
  // };
  const saludo = 'Hola Mundo';
  return (
    <>
      {/* <pre>{JSON.stringify(saludo, null, 3)}</pre> */}
      <h1>{saludo}</h1>
      <p>Mi primera App React</p>
    </>
  );
};

export default PrimeraApp;
