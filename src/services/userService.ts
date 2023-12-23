import { IRegister } from '../interfaces/IRegister';
import prisma from  '../../prisma/script';
import CustomError from '../utils/customError';
import { BCrypt } from '../utils/BCrypt';

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
    
    const { password, ...newUser} = await prisma.user.create({
      data: {
        email: userInfo.email,
        name: userInfo.name,
        password: hashPassword
      }
    })
    return newUser;
  }
}

export const userService = new UserService();

