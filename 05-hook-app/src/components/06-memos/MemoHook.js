import React, {useState, useMemo} from 'react';
import {useCounter} from '../../hooks/useCounter';
import {procesoPesado} from '../../helpers/procesoPesado';

export const MemoHook = () => {
  const {counter, increment} = useCounter(1000);
  const [show, setShow] = useState(true);

  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div className="container">
      <h1>Memo Hook</h1>
      <hr />
      <h3>
        Counter: <small>{counter}</small>
      </h3>

      <p>{memoProcesoPesado}</p>

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
