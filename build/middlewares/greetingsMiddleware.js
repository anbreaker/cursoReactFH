"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.greetingsMiddleware = void 0;
const greetingsMiddleware = (req, res, next) => {
    console.log('\n This is a middleware! for Greetings\n');
    next();
};
exports.greetingsMiddleware = greetingsMiddleware;
//# sourceMappingURL=greetingsMiddleware.js.map