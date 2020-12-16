import React from 'react';
import {MultipleUseHooks} from '../03-examples/MultipleUseHooks';

export const RealExampleRef = () => {
  const [show, setShow] = React.useState(false);

  return (
    <div className="container">
      <h1>Real Example hook Ref</h1>
      <hr />

      {show && <MultipleUseHooks />}

      <button
        className="mt-2 btn btn-primary"
        onClick={() => {
          setShow(!show);
        }}>
        Show / Hide
      </button>
    </div>
  );
};
