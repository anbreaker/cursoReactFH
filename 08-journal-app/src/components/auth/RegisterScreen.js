import React from 'react';
import {Link} from 'react-router-dom';

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          className="auth_input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
        />
        <input
          className="auth_input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
        />
        <input
          className="auth_input"
          type="text"
          placeholder="Password"
          name="password"
        />
        <input
          className="auth_input"
          type="text"
          placeholder="Password Confirm"
          name="password-confirm"
        />
        <button className="btn btn-primary btn-block mb-5" type="submit">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Alredy Registered?
        </Link>
      </form>
    </>
  );
};
