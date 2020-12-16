import React, {useEffect, useState} from 'react';
import {Message} from './Message';

export const SimpleForm = () => {
  const [formstate, setFormState] = useState({
    name: '',
    email: '',
  });

  const {name, email} = formstate;

  useEffect(() => {
    // console.log('hey!');
  }, []);

  useEffect(() => {
    // console.log('formState cambio!');
  }, [formstate]);

  useEffect(() => {
    // console.log('email cambio!');
  }, [email]);

  const handleInputChange = ({target}) => {
    setFormState({...formstate, [target.name]: target.value});
  };

  return (
    <>
      <div className="container">
        <h1>useEffect</h1>
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
      {name === '123' && <Message />}
    </>
  );
};
