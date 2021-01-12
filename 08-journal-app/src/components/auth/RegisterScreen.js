import React from 'react';
import {Link} from 'react-router-dom';
import {useForm} from '../../hooks/useForm';

export const RegisterScreen = () => {
  const [formValues, handleInputChange] = useForm({
    name: 'anbreaker',
    email: 'anbreaker@gmail.com',
    password: '123',
    password2: '123',
  });

  const {name, email, password, password2} = formValues;

  const handleRegister = (event) => {
    event.preventDefault();
    // console.log(name, email, password, password2);
  };

  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form onSubmit={handleRegister}>
        <input
          className="auth_input"
          type="text"
          placeholder="Name"
          name="name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          className="auth_input"
          type="text"
          placeholder="Email"
          name="email"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
        <input
          className="auth_input"
          type="text"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        <input
          className="auth_input"
          type="text"
          placeholder="Password Confirm"
          name="password2"
          value={password2}
          onChange={handleInputChange}
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
