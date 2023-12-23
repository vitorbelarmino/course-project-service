import { NextFunction, Request, Response } from 'express';
import CustomError from '../utils/customError';

const globalError = (err: CustomError, _req: Request, res: Response, next: NextFunction) => {
  try {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    return res.status(status).json({ error: message });
  } catch (error) {
    return next(error);
  }
};

export default globalError;
