import jwt, { TokenExpiredError } from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';
import CustomError from './customError';

export class Token {
  static async createToken(user: IUser) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'senha', {
      expiresIn: '1d',
      algorithm: 'HS256',
    });
    return token;
  }

  static async verifyToken(token: string) {
    try {
      const user = jwt.verify(token, process.env.JWT_SECRET || 'senha' )
      return user;

    } catch (error) {
      if (error instanceof TokenExpiredError) {
        throw new CustomError(401, error.message);
      }

      if (error instanceof jwt.JsonWebTokenError) {
        throw new CustomError(401, error.message);
      }

      throw new CustomError(500, 'Internal Server Error');
    }
      
  }
}
