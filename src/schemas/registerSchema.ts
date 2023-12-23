import Joi from "joi";

const messages = {
  name: {
    'string.empty': 'Name is required',
    'string.min': 'Name should have a minimum length of 3 characters',
    'any.required': 'Name is required'
  },
  email: {
    'string.empty': 'Email is required',
    'string.email': 'Email should be a valid email',
    'any.required': 'Email is required'
  },
  password: {
    'string.empty': 'Password is required',
    'string.min': 'Password should have a minimum length of 3 characters',
    'any.required': 'Password is required'
  }
}

export const registerSchema = Joi.object({
  name: Joi.string().min(3).required().messages(messages.name),
  email: Joi.string().email().required().messages(messages.email),
  password: Joi.string().min(3).required().messages(messages.password)
})