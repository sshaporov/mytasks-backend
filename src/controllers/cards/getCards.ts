import { Request, Response } from 'express'
import Card from '../../models/card-model'
import {IUserRequest} from '../../middleware/authMiddleware'

export const getCards = async (req: IUserRequest, res: Response) => {

  Card.find({user_id: req.user.id})
    .exec()
    .then(cards => {
      res.status(200).json(cards)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}