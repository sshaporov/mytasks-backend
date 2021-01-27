import {Response} from 'express'
import Card from '../../models/card-model'
import {IUserRequest} from '../../middleware/authMiddleware'

export const addCard = async (req: IUserRequest, res: Response) => {

  Card.create({title: req.body.title, user_id: req.user.id})
    .then(newCard => {
      res.status(201).json({item: newCard})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}