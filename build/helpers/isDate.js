"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDate = void 0;
const moment_1 = __importDefault(require("moment"));
const isDate = (value) => {
    if (!value)
        return false;
    const date = (0, moment_1.default)(value);
    if (date.isValid())
        return true;
    return false;
};
exports.isDate = isDate;
//# sourceMappingURL=isDate.js.map