import { Request, Response } from 'express';
import { keepSetGreetings } from '../repositories/keep.repository';

export const getGreetings = (req: Request, res: Response) => {
  const response = keepSetGreetings();

  try {
    return res.json(response);
  } catch (error) {
    console.log(error);
  }
};
