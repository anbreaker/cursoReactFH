import React from 'react';
import validator from 'validator';
import {removeErrorAction, setErrorAction} from '../../actions/ui';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';
import {startLoginEmailPassword, startGoogleLogin} from '../../actions/auth';

export const LoginScreen = () => {
  const dispatch = useDispatch();

  const {msgError, loading} = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: 'anbreaker@gmail.com',
    password: '123',
  });

  const {email, password} = formValues;

  const handleLogin = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      dispatch(startLoginEmailPassword(email, password));
    }
  };

  const handleGoogleLogin = () => {
    dispatch(startGoogleLogin());
  };

  const isFormValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setErrorAction('Email is not valid'));
      return false;
    } else if (password.length < 5) {
      dispatch(setErrorAction('Password should be at least 6 characters'));
      return false;
    }

    dispatch(removeErrorAction());
    return true;
  };

  return (
    <>
      <h3 className="auth__title">Login</h3>

      <form onSubmit={handleLogin}>
        {msgError && <div className="auth__alert-error">{msgError}</div>}
        <input
          className="auth_input"
          type="text"
          placeholder="email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth_input"
          type="text"
          placeholder="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <button className="btn btn-primary btn-block" type="submit" disabled={loading}>
          Login
        </button>

        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn" onClick={handleGoogleLogin}>
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>

        <Link to="/auth/register" className="link">
          Create new Account
        </Link>
      </form>
    </>
  );
};
