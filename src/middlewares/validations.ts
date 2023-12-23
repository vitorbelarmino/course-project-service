import { NextFunction, Request, Response } from 'express';
import { registerSchema } from '../schemas/registerSchema';

export class Validations {
  static validateRegister(
    req: Request,
    res: Response,
    next: NextFunction,
  ) {
    const body = req.body;
    const { error } = registerSchema.validate(body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  }
}