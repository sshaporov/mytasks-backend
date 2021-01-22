import { Request, Response } from 'express'
import Card from '../../models/cards-model'

export const changeCardTitle = async (req: Request, res: Response) => {
  Card.findByIdAndUpdate(req.params.cardId, { title: req.body.title }, {new: true} )
    .exec()
    .then((updatedCard) => {
      res.status(200).send({ item: updatedCard })
    })
    .catch(() => {
      // дописать текст ошибки
      res.status(400)
    })
}