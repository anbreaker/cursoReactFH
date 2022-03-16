import { Request, Response, NextFunction } from 'express';

export const greetingsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('\n This is a middleware! for Greetings\n');

  next();
};
