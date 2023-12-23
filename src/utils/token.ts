import jwt from 'jsonwebtoken';

export class Token {
  static async createToken(email: string, password: string) {
    const token = jwt.sign({ email, password }, process.env.JWT_SECRET || 'senha', {
      expiresIn: '30d',
      algorithm: 'HS256',
    });
    return token;
  }
}
