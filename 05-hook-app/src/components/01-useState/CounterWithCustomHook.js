import React from 'react';
import {getLCP} from 'web-vitals';
import {useCounter} from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {
  const {state, increment, decrement, reset} = useCounter();

  return (
    <>
      <div className="container">
        <h1>Counter with Hook: {state}</h1>
        <hr />
        <button onClick={() => increment(2)} className="btn btn-primary">
          sum
        </button>
        <button onClick={() => decrement(2)} className="btn btn-secondary">
          sub
        </button>
        <button onClick={reset} className="btn btn-danger">
          reset
        </button>
      </div>
    </>
  );
};
