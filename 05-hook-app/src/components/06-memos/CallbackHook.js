import React, {useState, useCallback} from 'react';
import {ShowIncrement} from './ShowIncrement';

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // };

  const increment = useCallback(
    (num) => {
      setCounter((counter) => counter + num);
    },
    [setCounter]
  );

  return (
    <div className="container">
      <h1>useCallback Hook</h1>
      <hr />
      <h3>{counter}</h3>

      <ShowIncrement increment={increment} />
    </div>
  );
};
