import { Router } from 'express';
import { check } from 'express-validator';

import {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
} from '../controllers/event.controller';
import { isDate } from '../helpers/isDate';
import { validateFields } from '../middlewares/validateFields';
import { validateJwt } from '../middlewares/validateJwt';

const router = Router();

/*
  /api/events
*/

router.get('/', [validateJwt], getEvents);
router.post(
  '/',
  [
    validateJwt,
    check('title', 'Title is required').not().isEmpty(),
    check('start', 'Initial date is required').custom(isDate),
    check('end', 'End date is required').custom(isDate),
    validateFields,
  ],
  createEvent
);
router.put('/:id', validateJwt, updateEvent);
router.delete('/:id', validateJwt, deleteEvent);

export default router;
