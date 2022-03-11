"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const auth_controller_1 = require("../controllers/auth.controller");
const validateFields_1 = require("../middlewares/validateFields");
const validateJwt_1 = require("../middlewares/validateJwt");
const router = (0, express_1.Router)();
router.post('/new', [
    (0, express_validator_1.check)('name', 'Name is required.').not().isEmpty(),
    (0, express_validator_1.check)('email', 'Email is required.').isEmail(),
    (0, express_validator_1.check)('password', 'Password must be 4 characters long.').isLength({ min: 4 }),
    validateFields_1.validateFields,
], auth_controller_1.createUser);
router.post('/', [
    (0, express_validator_1.check)('email', 'Email is required.').isEmail(),
    (0, express_validator_1.check)('password', 'Password must be 4 characters long.').isLength({ min: 4 }),
    validateFields_1.validateFields,
], auth_controller_1.loginUser);
router.get('/renew', validateJwt_1.validateJwt, auth_controller_1.renewToken);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map