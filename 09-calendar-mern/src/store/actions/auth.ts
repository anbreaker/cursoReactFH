import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { fetchWithoutToken, fetchWithToken } from '../../helpers/fetch';
import { types } from '../../types/types';
import { eventLogout } from './events';

export const startLogin = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetchWithoutToken('auth', { email, password }, 'POST');

    const body = await response.json();

    if (body.ok) {
      loginOrRegisterFetch(body);

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire('Error', 'Usuario o contraseñar Erroneo.', 'error');
    }
  };
};

const login = (user: any) => ({
  type: types.authLogin,
  payload: user,
});

export const startRegister = (name: string, email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetchWithoutToken(
      'auth/new',
      { name, email, password },
      'POST'
    );

    const body = await response.json();

    if (body.ok) {
      loginOrRegisterFetch(body);

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      Swal.fire('Error', body.msg, 'error');
    }
  };
};

export const startChecking = () => {
  return async (dispatch: any) => {
    const response = await fetchWithToken('auth/renew');

    const body = await response.json();

    if (body.ok) {
      loginOrRegisterFetch(body);

      dispatch(
        login({
          uid: body.uid,
          name: body.name,
        })
      );
    } else {
      dispatch(checkingFinish());
    }
  };
};

export const startLogout = () => {
  return (dispatch: any) => {
    localStorage.clear();

    dispatch(logout());

    dispatch(eventLogout());
  };
};

const logout = () => ({ type: types.authLogout });

const checkingFinish = () => ({ type: types.authCheckingFinish });

const loginOrRegisterFetch = (body: any) => {
  localStorage.setItem('token', body.token);
  localStorage.setItem('token-init-date', new Date().getTime().toString());
};
