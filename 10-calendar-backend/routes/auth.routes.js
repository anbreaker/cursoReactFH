const { Router } = require('express');
const router = Router();

const { createUser, loginUser, renewToken } = require('../controllers/auth.controller');

/*
  Routes Auth: host+ /api/auth
*/

router.get('/renew', createUser);

router.post('/', loginUser);

router.post('/new', renewToken);

module.exports = router;
