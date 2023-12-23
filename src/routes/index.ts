import { Router } from 'express'
import { Validations } from '../middlewares/validations'
import { userController } from '../controllers/userController'

export const router = Router()
router.post('/register', Validations.validateRegister ,userController.create)