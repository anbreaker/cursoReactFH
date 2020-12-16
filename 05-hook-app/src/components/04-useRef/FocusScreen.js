import React, {useRef} from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  };

  return (
    <div className="container">
      <h1> Focus Screen</h1>

      <input ref={inputRef} className="form-control" placeholder="Name" />

      <button className="mt-5 btn btn-outline-primary" onClick={handleClick}>
        input
      </button>
    </div>
  );
};
