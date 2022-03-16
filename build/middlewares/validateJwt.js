"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validateJwt = (req, res, next) => {
    const token = req.header('x-token');
    if (!token)
        return res.status(401).json({ ok: false, msg: 'Invalid token' });
    try {
        const { uid, name } = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.uid = uid;
        req.name = name;
    }
    catch (error) {
        return res.status(401).json({ ok: false, msg: 'Invalid token' });
    }
    next();
};
exports.validateJwt = validateJwt;
//# sourceMappingURL=validateJwt.js.map