import { Request, Response } from 'express'
import Card from '../../models/card-model'

export const changeCardTitle = async (req: Request, res: Response) => {
  Card.findByIdAndUpdate(req.params.cardId, {title: req.body.title}, {new: true})
    .exec()
    .then(updatedCard => {
      res.status(200).json({ item: updatedCard })
    })
    .catch(err => {
      res.status(500).json(err)
    })
}