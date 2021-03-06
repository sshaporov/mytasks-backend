import {Response} from 'express'
import {IUserRequest} from '../../middleware/authMiddleware'
import User from '../../models/user-model'
import {validateEmailAccessibility} from '../../helpers/validateEmailAccessibility';

export const changeUserData = async (req: IUserRequest, res: Response) => {

  const userId = req.user.id
  const name = req.body.name
  const email = req.body.email

  if (name === undefined || email === undefined) {
    res.status(400).json({message: 'No user data in the body'})
  } else {

    validateEmailAccessibility(email).then(valid => {
      if (valid) {
        User.findByIdAndUpdate(userId, {name, email}, {new: true})
          .exec()
          .then(updatedUser => {
            res.status(200).json(updatedUser)
          })
          .catch(err => {
            res.status(500).json(err)
          })
      } else {
        res.status(400).json({message: 'Email already used'})
      }
    })
  }
}