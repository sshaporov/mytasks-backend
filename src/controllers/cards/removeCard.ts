import { Request, Response } from 'express'
import Card from '../../models/cards-model'

export const removeCard = async (req: Request, res: Response) => {
  Card.findOneAndDelete({ _id: req.params.cardId })
    .exec()
    .then(() => {
      res.status(200).send()
    })
    .catch(() => {
      // дописать текст ошибки
      res.status(400)
    })
}
