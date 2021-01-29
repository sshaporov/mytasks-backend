import {Response} from 'express'
import Card from '../../models/card-model'
import {IUserRequest} from '../../middleware/authMiddleware'

export const addCard = async (req: IUserRequest, res: Response) => {
  const card = {
    title: req.body.title,
    user_id: req.user.id,
  }

  if(card.title === undefined) {
    res.status(400).json({message: 'No card title in the body!'})
  } else {
    Card.create(card)
      .then(newCard => {
        res.status(201).json({item: newCard})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}