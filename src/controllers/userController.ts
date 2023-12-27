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

  public async getUserByToken(req: Request, res: Response): Promise<Response> {
    const token = req.headers.authorization;
    
    if (!token) {
      return res.status(401).json({ message: 'Token not found' });
    }
    const user = await userService.getUserByToken(token);
    return res.status(200).json(user);
  }
}

export const userController = new UserController()
