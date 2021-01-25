import {Request, Response} from 'express'

const emailRegExp = /^[\w][\w-.]*@[\w-]+\.[a-z]{2,7}$/i

export const emailValidator = (email: string): boolean => emailRegExp.test(email)

export const passwordValidator = (password: string): boolean => password.length > 3

export const validateAuth = (req: Request, res: Response) => {
  const isEmailValid = emailValidator(req.body.email)
  const isPassValid = passwordValidator(req.body.password)

  if(!isEmailValid) {
    res.status(400).json({message: 'Email or password incorrect!'})
    return false
  } else if(!isPassValid) {
    res.status(400).json({message: 'Password is too short!'})
    return false
  } else {
    return true
  }
}