import { Request, Response } from 'express'
import Card from '../../models/cards-model'

export const getCards = async (req: Request, res: Response) => {
  Card.find()
    .exec()
    .then((cards) => {
      res.status(200).send(cards)
    })
    .catch(() => {
      // дописать текст ошибки
      res.status(400)
    })
}