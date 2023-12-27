import { Request, Response } from 'express';
import { userService } from '../services/userService';

class UserController {
  public async create(req: Request, res: Response): Promise<Response> {
    const body = req.body;
    const token = await userService.create(body)
    return res.status(201).json({ token });
  }

  public async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const token = await userService.login(email, password);
    return res.status(200).json({ token });
  }
}

export const userController = new UserController()
