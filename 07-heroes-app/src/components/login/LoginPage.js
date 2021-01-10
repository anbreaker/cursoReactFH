import React, {useContext} from 'react';
import {AuthContext} from '../../auth/AuthContext';
import {types} from '../../types/types';

export const LoginPage = ({history}) => {
  const {dispatch} = useContext(AuthContext);

  const handleClick = () => {
    // history.push('/');

    const lastPath = localStorage.getItem('lastPath') || '/';
    console.log(lastPath, 'ver');

    const action = {
      type: types.login,
      payload: {
        name: 'anbreaker',
      },
    };

    dispatch(action);

    history.replace(lastPath);
  };
  return (
    <div className="container">
      <h1>LoginPage</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleClick}>
        Login
      </button>
    </div>
  );
};
