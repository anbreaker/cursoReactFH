import { Request, Response } from 'express';

import { generateJWT } from '../helpers/jwt';
import { CustomRequest } from '../middlewares/validateJwt';
import { User } from '../models/User.model';
import { keepSetGreetings } from '../repositories/keep.repository';

export const getGreetings = (req: Request, res: Response) => {
  const response = keepSetGreetings();

  try {
    return res.json(response);
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;

    let user = await User.findOne({ email });

    if (user) return res.status(400).json({ ok: false, message: 'User already exists' });

    user = new User(req.body);

    await user.save();

    const token = generateJWT(user.id, user.name);

    return res
      .status(201)
      .json({ msg: 'Create User', uid: user.id, name: user.name, token });
  } catch (error) {
    res.status(500).json({ msg: 'Please talk with support' });
    console.log(error);
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({ ok: false, message: 'User or password incorrect' });

    const passwordValid = await user.checkPassword(password);
    if (!passwordValid)
      return res.status(400).json({ ok: false, message: 'Password incorrect' });

    const token = generateJWT(user.id, user.name);

    return res.json({
      ok: true,
      message: 'Login User',
      name,
      email,
      password: user.password,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};

export const renewToken = (req: CustomRequest, res: Response) => {
  try {
    const { uid, name } = req;

    if (!uid || !name) return res.status(500).json({ error: 'Error in server' });

    const token = generateJWT(uid, name!);

    return res.json({ ok: true, token });
  } catch (error) {
    console.log(error);
  }
};
