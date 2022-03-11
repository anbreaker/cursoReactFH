import jwt from 'jsonwebtoken';
import { Schema } from 'mongoose';

export const generateJWT = (uid: Schema.Types.ObjectId, name: string) => {
  try {
    return jwt.sign({ uid, name }, process.env.JWT_SECRET!, { expiresIn: '2h' });
  } catch (error) {
    console.log(error);

    return 'No se pudo generar el token';
  }
};
