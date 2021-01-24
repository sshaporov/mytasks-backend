import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../config'

export const authMiddleware = (req: Request, res: Response, next) => {
  const authHeader = req.get('Authorization')
  if(!authHeader) {
    res.status(401).json({message: 'Token not provided!'})
  }

  const token = authHeader.replace('Bearer ', '')
  try {
    jwt.verify(token, JWT_SECRET)
  } catch (err) {
    if (err instanceof jwt.JsonWebTokenError) {
      res.status(401).json({message: 'Invalid token'})
    }
  }
  next()
}