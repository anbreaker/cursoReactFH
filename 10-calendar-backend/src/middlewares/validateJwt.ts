import { Request, Response, NextFunction } from 'express';
import { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';

export interface CustomRequest extends Request {
  uid?: Schema.Types.ObjectId;
  name?: string;
}

export const validateJwt = (req: CustomRequest, res: Response, next: NextFunction) => {
  const token = req.header('x-token');

  if (!token) return res.status(401).json({ ok: false, msg: 'Invalid token' });

  try {
    const { uid, name }: any = jwt.verify(token, process.env.JWT_SECRET!);

    // add to request
    req.uid = uid;
    req.name = name;
  } catch (error) {
    return res.status(401).json({ ok: false, msg: 'Invalid token' });
  }

  next();
};
