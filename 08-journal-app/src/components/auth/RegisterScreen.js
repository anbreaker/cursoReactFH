import React from 'react';
import {Link} from 'react-router-dom';
import {
  finishLoading,
  removeErrorAction,
  setErrorAction,
  startLoading,
} from '../../actions/ui';
import {useDispatch, useSelector} from 'react-redux';
import {useForm} from '../../hooks/useForm';
import validator from 'validator';
import {startRegisterWithEmailPasswordName} from '../../actions/auth';

export const RegisterScreen = () => {
  const dispatch = useDispatch();

  const {loading, msgError} = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: 'anbreaker',
    email: 'anbreaker@gmail.com',
    password: '123456',
    password2: '123456',
  });

  const {name, email, password, password2} = formValues;

  const handleRegister = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      dispatch(startLoading());
      dispatch(startRegisterWithEmailPasswordName(email, password, name));
      dispatch(finishLoading());
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setErrorAction('Name is required'));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setErrorAction('Email is not valid'));
      return false;
    } else if (password !== password2 || password.length < 5) {
      dispatch(
        setErrorAction('Password should be at least 6 characters and match each other')
      );
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}

        <input
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth__input"
          type="text"
          placeholder="Password Confirm"
          name="password2"
          value={password2}
          onChange={handleInputChange}
        />
        <button
          className="btn btn-primary btn-block mb-5"
          type="submit"
          disabled={loading}>
          Register
        </button>

        <Link to="/auth/login" className="link">
          Alredy Registered?
        </Link>
      </form>
    </>
  );
};
