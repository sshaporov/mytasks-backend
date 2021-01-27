import { Request, Response } from 'express'
import Card from '../../models/card-model'

export const removeCard = async (req: Request, res: Response) => {

  // можно проверить что req.user.id = user_id в найденном юзере

  Card.findOneAndDelete({_id: req.params.cardId})
    .exec()
    .then(() => {
      res.status(200).json({success: true})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}
