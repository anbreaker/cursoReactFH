"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGreetings = void 0;
const keep_repository_1 = require("../repositories/keep.repository");
const getGreetings = (req, res) => {
    const response = (0, keep_repository_1.keepSetGreetings)();
    try {
        return res.json(response);
    }
    catch (error) {
        console.log(error);
    }
};
exports.getGreetings = getGreetings;
//# sourceMappingURL=keep.controller%20copy.js.map