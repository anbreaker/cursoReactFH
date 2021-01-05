import React, {useContext} from 'react';
import {UserContext} from './UserContext';

export const LoginPage = () => {
  const {setUser} = useContext(UserContext);

  return (
    <div>
      <div>
        <h1>LoginPage</h1>
        <hr />

        <button
          className="btn btn-primary"
          onClick={() => setUser({id: 123, name: 'anbreaker'})}>
          Login
        </button>
      </div>
    </div>
  );
};
