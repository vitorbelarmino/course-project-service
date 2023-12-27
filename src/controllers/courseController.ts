import { Request, Response } from 'express';
import { courseService } from '../services/courseService';

class CourseController {
  public async getCourses(req: Request, res: Response): Promise<Response> {
    const courses = await courseService.getCourses();
    return res.status(200).json(courses);
  }
}

export const courseController = new CourseController()
