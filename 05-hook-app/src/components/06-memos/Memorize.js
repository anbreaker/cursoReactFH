import React, {useState} from 'react';
import {useCounter} from '../../hooks/useCounter';
import {Small} from './Small';

export const Memorize = () => {
  const {counter, increment} = useCounter(10);
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <h1>Memorize Hooks</h1>
      <hr />
      <h3>
        Counter: <Small value={counter} />
      </h3>
      <button className="btn btn-primary m-2" onClick={increment}>
        +1
      </button>
      <button
        className=" btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}>
        Show / Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};
