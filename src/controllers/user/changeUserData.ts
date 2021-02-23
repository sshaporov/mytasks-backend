import { Request, Response } from 'express'
import Card from '../../models/card-model';
import {IUserRequest} from '../../middleware/authMiddleware'
import User from '../../models/user-model';

export const changeUserData = async (req: IUserRequest, res: Response) => {

  const userId = req.user.id
  const name = req.body.name
  const email = req.body.email


  if(name === undefined || email === undefined) {
    res.status(400).json({message: 'No user data in the body'})
  } else {
    User.findByIdAndUpdate(userId, {name, email}, {new: true})
      .exec()
      .then(updatedUser => {
        res.status(200).json(updatedUser)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }

}