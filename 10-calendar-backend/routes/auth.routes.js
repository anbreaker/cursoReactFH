const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { validateFields } = require('../middlewares/validateFields');
const { createUser, loginUser, renewToken } = require('../controllers/auth.controller');

/*
  Routes Auth: host+ /api/auth
*/

router.post(
  '/new',
  [
    check('name', 'The name is Mandatory').not().isEmpty(),
    check('email', 'The email is Mandatory').isEmail(),
    check('password', 'The password is Mandatory and > 6').isLength({ min: 6 }),
    validateFields,
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'The email is Mandatory').isEmail(),
    check('password', 'The password is Mandatory and > 6').isLength({ min: 6 }),
    validateFields,
  ],
  loginUser
);

router.get('/renew', renewToken);

module.exports = router;
