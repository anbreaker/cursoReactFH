"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const greetingsMiddleware_1 = require("../middlewares/greetingsMiddleware");
const keep_controller_1 = require("../controllers/keep.controller");
const router = (0, express_1.Router)();
router.get('/', greetingsMiddleware_1.greetingsMiddleware, keep_controller_1.getGreetings);
exports.default = router;
//# sourceMappingURL=keep.routes.js.map