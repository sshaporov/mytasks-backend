import { Request, Response } from 'express'
import User from '../../models/user-model'
import * as bCrypt from 'bCrypt'
import * as jwt from 'jsonwebtoken'
import {JWT_SECRET} from '../../config'
import {validateAuth} from '../../helpers/validateAuth'

export const logIn = async (req: Request, res: Response) => {
  if(validateAuth(req, res)) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({email})

      if(!user) {
        return res.status(401).json({message: 'User not found!'})
      }

      const isPassValid = bCrypt.compareSync(password, user.password)
      if (!isPassValid) {
        return res.status(401).json({message: 'Invalid credentials!'})
      }

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
}