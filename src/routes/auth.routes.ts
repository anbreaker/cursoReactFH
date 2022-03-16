import { Router } from 'express';
import { check } from 'express-validator';

import { createUser, loginUser, renewToken } from '../controllers/auth.controller';
import { validateFields } from '../middlewares/validateFields';
import { validateJwt } from '../middlewares/validateJwt';

const router = Router();

/*
  /api/auth
*/

router.post(
  '/new',
  [
    check('name', 'Name is required.').not().isEmpty(),
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password must be 4 characters long.').isLength({ min: 4 }),
    validateFields,
  ],
  createUser
);

router.post(
  '/',
  [
    check('email', 'Email is required.').isEmail(),
    check('password', 'Password must be 4 characters long.').isLength({ min: 4 }),
    validateFields,
  ],
  loginUser
);

router.get('/renew', validateJwt, renewToken);

export default router;
