import {Response} from 'express'
import Card from '../../models/card-model'
import {IUserRequest} from '../../middleware/authMiddleware'

export const getCards = async (req: IUserRequest, res: Response) => {

  const userId = req.user.id

  Card.find({user_id: userId})
    .exec()
    .then(cards => {
      res.status(200).json(cards)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}