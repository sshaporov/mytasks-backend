import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config'

export interface IUserRequest extends Request {
  user: any
}

export const authMiddleware = (req: IUserRequest, res: Response, next) => {
  if(req.method === 'OPTIONS') {
    return next()
  }

  try{
    const token = req.headers.authorization.split(' ')[1]
    if(!token) {
      return res.status(401).json({message: 'Auth error!'})
    }
    const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
  } catch (err) {
    return res.status(401).json({message: 'Token not provided!'})
  }
}