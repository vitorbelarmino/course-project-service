import { Router } from 'express'
import { Validations } from '../middlewares/validations'
import { userController } from '../controllers/userController'
import { categoryController } from '../controllers/categoryController'
import { courseController } from '../controllers/courseController'

export const router = Router()
router
  .post('/register', Validations.validateRegister ,userController.create)
  .post('/login', Validations.validateLogin, userController.login)
  .get('/claims', userController.getUserByToken)
  .get('/categories', categoryController.getCategories)
  .get('/courses', courseController.getCourses)
