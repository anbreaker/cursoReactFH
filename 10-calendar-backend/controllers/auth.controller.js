const { response } = require('express');

const createUser = (req, res = response) => {
  const { name, email, password } = req.body;

  res.status(201).json({
    ok: true,
    msg: 'create user',
    name,
    email,
    password,
  });
};

const loginUser = (req, res = response) => {
  const { name, email } = req.body;
  res.json({
    ok: true,
    msg: 'login',
    name,
    email,
  });
};

const renewToken = (req, res = response) => {
  res.json({ ok: true, msg: 'renew token' });
};

module.exports = { createUser, loginUser, renewToken };
