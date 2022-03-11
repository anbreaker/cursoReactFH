"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generateJWT = (uid, name) => {
    try {
        return jsonwebtoken_1.default.sign({ uid, name }, process.env.JWT_SECRET, { expiresIn: '2h' });
    }
    catch (error) {
        console.log(error);
        return 'No se pudo generar el token';
    }
};
exports.generateJWT = generateJWT;
//# sourceMappingURL=jwt.js.map