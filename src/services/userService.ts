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
      throw new CustomError(400, 'User already exists');
    }

    const hashPassword = await BCrypt.hashPassword(userInfo.password);
    
    const { password, ...newUser } = await prisma.user.create({
      data: {
        email: userInfo.email,
        name: userInfo.name,
        password: hashPassword
      }
    })
    return newUser;
  }

  public async login(email: string, password: string) {
    const user = await prisma.user.findUnique({
      where: {
        email: email
      }
    })

    if (!user) {
      throw new CustomError(400, 'User not found');
    }

    const isPasswordValid = await BCrypt.comparePasswords(password, user.password);

    if (!isPasswordValid) {
      throw new CustomError(400, 'Invalid password');
    }

    const token = await Token.createToken(email, password);
    return token;
  }
}

export const userService = new UserService();
