import { Request, Response } from 'express'
import Card from '../../models/card-model'

export const removeCard = async (req: Request, res: Response) => {
  const cardId = req.params.cardId

  Card.findOneAndDelete({_id: cardId})
    .exec()
    .then(() => {
      res.status(200).json({success: true})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}
