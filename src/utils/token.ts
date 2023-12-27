import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces/IUser';

export class Token {
  static async createToken(user: IUser) {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET || 'senha', {
      expiresIn: '30d',
      algorithm: 'HS256',
    });
    return token;
  }
}
