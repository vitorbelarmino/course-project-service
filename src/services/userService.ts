import { IRegister } from '../interfaces/IRegister';
import prisma from  '../../prisma/script';
import CustomError from '../utils/customError';
import { BCrypt } from '../utils/BCrypt';
import { Token } from '../utils/token';

class UserService {
  public async create(userInfo: IRegister) {
    const user = await prisma.user.findUnique({
      where: {
        email: userInfo.email
      }
    })

    if (user) {
      throw new CustomError(409, 'User already exists');
    }

    const hashPassword = await BCrypt.hashPassword(userInfo.password);
    
    const newUser = await prisma.user.create({
      data: {
        email: userInfo.email,
        name: userInfo.name,
        password: hashPassword
      }
    })
    const token = await Token.createToken(newUser);

    return token;
  }

  public async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new CustomError(404, 'User not found');
    }

    const isPasswordValid = await BCrypt.comparePasswords(password, user.password);

    if (!isPasswordValid) {
      throw new CustomError(401, 'Invalid password');
    }

    const token = await Token.createToken(user);
    return token;
  }

  public async getUserByToken(token: string) {
    const user = await Token.verifyToken(token);
    return user;
  }
}

export const userService = new UserService();
