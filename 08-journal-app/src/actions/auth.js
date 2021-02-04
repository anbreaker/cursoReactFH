import Swal from 'sweetalert2';
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';
import {types} from '../types/types';
import {notesLogout} from './notes';
import {startLoading, finishLoading} from './ui';

export const startLoginEmailPassword = (email, password) => {
  return (dispatch) => {
    dispatch(startLoading());

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName));

        dispatch(finishLoading());
      })
      .catch((error) => {
        console.error('Error ->', error);
        dispatch(finishLoading());
        Swal.fire('Error', error.message, 'error');
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({user}) => {
        await user.updateProfile({displayName: name});

        dispatch(login(user.uid, user.displayName));
      })
      .catch((error) => {
        console.error('Error ->', error);
        Swal.fire('Error', error.message, 'error');
      });
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({user}) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const login = (uid, displayName) => {
  return {
    type: types.login,
    payload: {
      uid,
      displayName,
    },
  };
};

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();

    dispatch(logout());

    dispatch(notesLogout());
  };
};

export const logout = () => ({
  type: types.logout,
});
