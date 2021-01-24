import { Request, Response } from 'express'
import User from '../../models/user-model'
import * as bCrypt from 'bCrypt'
import * as jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../../config'

export const logIn = async (req: Request, res: Response) => {
  const {email, password} = req.body

  User.findOne({email})
    .exec()
    .then(user => {
      if(!user) {
        res.status(401).json({message: 'User not found!'})
      }

      const isValid = bCrypt.compareSync(password, user.password)
      if (isValid) {
        const token = jwt.sign(user._id.toString(), JWT_SECRET)
        res.json({token})
      } else {
        res.status(401).json({messsge: 'Invalid credentials!'})
      }
    })
    .catch(err => {
      res.status(500).json(err)
    })
}