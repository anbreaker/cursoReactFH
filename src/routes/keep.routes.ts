import { Router } from 'express';

import { greetingsMiddleware } from '../middlewares/greetingsMiddleware';
import { getGreetings } from '../controllers/keep.controller';

const router = Router();

// /api/
router.get('/', greetingsMiddleware, getGreetings);

export default router;
