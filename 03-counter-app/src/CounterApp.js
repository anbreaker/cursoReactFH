import React, {useState} from 'react';
import PropTypes from 'prop-types';

// Functional Component

const CounterApp = ({value = 10}) => {
  const [counter, setCounter] = useState(value);

  const handleAdd = (e) => {
    // setCounter((c) => c + 1);
    setCounter(counter + 1);
  };

  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={handleAdd}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

CounterApp.defaultProps = {
  value: 23,
};
export default CounterApp;
