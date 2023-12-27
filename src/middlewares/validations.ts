import { NextFunction, Request, Response } from 'express';
import { registerSchema } from '../schemas/registerSchema';
import { loginSchema } from '../schemas/loginSchema';

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

  static validateLogin(req: Request, res: Response, next: NextFunction) {
    const body = req.body;
    const { error } = loginSchema.validate(body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }
    next();
  }
}

