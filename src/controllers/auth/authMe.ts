import { Request, Response } from 'express'
import * as jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../../config'
import User from '../../models/user-model'
import {IUserRequest} from '../../middleware/authMiddleware';

// используем IUserRequest тк в req сидит декодированный user id который декодирован в authMiddleware
export const authMe = async (req: IUserRequest, res: Response) => {
    try {
      const user = await User.findOne({_id: req.user.id}).exec()
      const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '1h'})
      return res.json({
        token,
        user: {
          _id: user._id,
          name: user.name,
          email: user.email,
        }
      })
    } catch (err) {
      res.status(500).json(err)
    }
}