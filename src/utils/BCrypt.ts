import CustomError from './customError';
import bcrypt from 'bcrypt';

export class BCrypt {
  static async hashPassword(password: string): Promise<string> {
    try {
      const hash = await bcrypt.hash(password, 10);
      return hash;
    } catch (error) {
      throw new CustomError(400, 'Error generating password hash');
    }
  }

  static async comparePasswords(
    password: string,
    hashedPassword: string,
  ): Promise<boolean> {
    try {
      const match = await bcrypt.compare(password, hashedPassword);
      return match;
    } catch (error) {
      throw new CustomError(400, 'incorrect password.')
    }
  }
}