import React, {useEffect} from 'react';
import {useForm} from '../../hooks/useForm';

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const {name, email, password} = formValues;

  useEffect(() => {
    console.log('email cambio!');
  }, [email]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <h1>FormWithCustomHook</h1>
      </div>

      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="123 for Magic!"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Your email@mail.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />
      </div>
      <br />
      <div className="form-group">
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className="btn btn-primary mt-2" type="submit">
        Submit
      </button>
    </form>
  );
};
