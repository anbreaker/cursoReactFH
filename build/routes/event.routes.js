"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const event_controller_1 = require("../controllers/event.controller");
const isDate_1 = require("../helpers/isDate");
const validateFields_1 = require("../middlewares/validateFields");
const validateJwt_1 = require("../middlewares/validateJwt");
const router = (0, express_1.Router)();
router.get('/', [validateJwt_1.validateJwt], event_controller_1.getEvents);
router.post('/', [
    validateJwt_1.validateJwt,
    (0, express_validator_1.check)('title', 'Title is required').not().isEmpty(),
    (0, express_validator_1.check)('start', 'Initial date is required').custom(isDate_1.isDate),
    (0, express_validator_1.check)('end', 'End date is required').custom(isDate_1.isDate),
    validateFields_1.validateFields,
], event_controller_1.createEvent);
router.put('/:id', validateJwt_1.validateJwt, event_controller_1.updateEvent);
router.delete('/:id', validateJwt_1.validateJwt, event_controller_1.deleteEvent);
exports.default = router;
//# sourceMappingURL=event.routes.js.map