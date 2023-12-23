import { Request, Response } from 'express';
import { userService } from '../services/userService';
import { BCrypt } from '../utils/BCrypt';


class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const body = req.body;
    const user = await userService.create(body)
    return res.status(201).json(user);
  }
}

export const userController = new UserController()
