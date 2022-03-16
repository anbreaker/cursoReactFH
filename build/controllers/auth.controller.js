"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renewToken = exports.loginUser = exports.createUser = exports.getGreetings = void 0;
const jwt_1 = require("../helpers/jwt");
const User_model_1 = require("../models/User.model");
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
const createUser = async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User_model_1.User.findOne({ email });
        if (user)
            return res.status(400).json({ ok: false, msg: 'User already exists' });
        user = new User_model_1.User(req.body);
        await user.save();
        const token = (0, jwt_1.generateJWT)(user.id, user.name);
        return res
            .status(201)
            .json({ ok: true, msg: 'Create User', uid: user.id, name: user.name, token });
    }
    catch (error) {
        res.status(500).json({ msg: 'Please talk with support' });
        console.log(error);
    }
};
exports.createUser = createUser;
const loginUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User_model_1.User.findOne({ email });
        if (!user)
            return res.status(400).json({ ok: false, msg: 'User or password incorrect' });
        const passwordValid = await user.checkPassword(password);
        if (!passwordValid)
            return res.status(400).json({ ok: false, msg: 'Password incorrect' });
        const token = (0, jwt_1.generateJWT)(user.id, user.name);
        return res.json({
            ok: true,
            msg: 'Login User',
            name: user.name,
            uid: user.id,
            email,
            password: user.password,
            token,
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.loginUser = loginUser;
const renewToken = (req, res) => {
    try {
        const { uid, name } = req;
        if (!uid || !name)
            return res.status(500).json({ error: 'Error in server' });
        const token = (0, jwt_1.generateJWT)(uid, name);
        return res.json({ ok: true, uid, name, token });
    }
    catch (error) {
        console.log(error);
    }
};
exports.renewToken = renewToken;
//# sourceMappingURL=auth.controller.js.map