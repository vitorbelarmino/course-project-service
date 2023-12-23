import Joi from 'joi';

const messages = {
  email: {
    'string.empty': 'Email is not allowed to be empty',
    'string.email': 'Email must be a valid email',
  },
  password: {
    'string.empty': 'Password is not allowed to be empty',
    'string.min': 'Password must be at least 3 characters long',
  },
}

export const loginSchema = Joi.object({
    email: Joi.string().email().required().messages(messages.email),
    password: Joi.string().min(3).required().messages(messages.password),
});
