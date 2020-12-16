import React, {useState} from 'react';

export const CounterApp = () => {
  const [state, setState] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });

  const {counter1, counter2} = state;
  // console.log(counter);

  return (
    <>
      <div className="container">
        <h1>Counter {counter1}</h1>
        <h1>Counter {counter2}</h1>
        <hr />
        <button
          className="btn btn-primary"
          onClick={() => {
            setState({
              ...state,
              counter1: counter1 + 1,
            });
          }}>
          +1
        </button>
      </div>
    </>
  );
};
