"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = require("bcrypt");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password'))
        next();
    const salt = await (0, bcrypt_1.genSalt)(10);
    this.password = await (0, bcrypt_1.hash)(this.password, salt);
});
UserSchema.methods.checkPassword = async function (passwordForm) {
    return await (0, bcrypt_1.compare)(passwordForm, this.password);
};
exports.User = (0, mongoose_1.model)('User', UserSchema);
//# sourceMappingURL=User.model.js.map