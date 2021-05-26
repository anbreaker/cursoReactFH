const { request, response } = require('express');

const createUser = (req = request, res = response) => {
  res.json({ ok: true, msg: 'renew token' });
};

const loginUser = (req = request, res = response) => {
  res.json({ ok: true, msg: 'login' });
};

const renewToken = (req = request, res = response) => {
  res.json({ ok: true, msg: 'registro' });
};

module.exports = { createUser, loginUser, renewToken };
