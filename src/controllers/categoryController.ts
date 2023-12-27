import { Request, Response } from 'express';
import { categoryService } from '../services/categoryService';

class CategoryController {
  public async getCategories(req: Request, res: Response): Promise<Response> {
    const categories = await categoryService.getCategories();
    return res.status(200).json(categories);
  }
}

export const categoryController = new CategoryController()
