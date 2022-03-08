import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { ActionsTypes } from '../../types/actions';
import { AuthContext } from '../../auth/authContext';

export const LoginPage = () => {
  const navigate = useNavigate();

  const { dispatch }: any = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: ActionsTypes.LOGIN,
      payload: {
        name: 'anbreaker',
      },
    };

    dispatch(action);

    const lastPath = localStorage.getItem('lastPath');

    navigate(lastPath || '/marvel', {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
