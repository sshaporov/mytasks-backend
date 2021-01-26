import {Request, Response} from 'express'
import User from '../../models/user-model'
import * as bCrypt from 'bCrypt'
import {validateAuth} from '../../helpers/validateAuth';

export const createUser = async (req: Request, res: Response) => {
  if(validateAuth(req, res)) {
    try {
      //const {name, email, password} = req.body
      const email = req.body.email
      const password = req.body.password

      // без await не работает тк методы бд асинхронные
      const candidate = await User.findOne({email})

      if (candidate) {
        return res.status(400).json({message: `User with email ${email} already exist!`})
      }

      const hashPassword = await bCrypt.hash(password, 10)

      const user = new User({email, password: hashPassword})
      await User.create(user)
      res.json({message: 'User was created!'})

    } catch (err) {
      res.status(500).json(err)
    }
  }
}