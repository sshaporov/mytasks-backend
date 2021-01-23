import { Request, Response } from 'express'
import Card from '../../models/cards-model'

export const getCards = async (req: Request, res: Response) => {
  Card.find()
    .exec()
    .then((cards) => {
      res.status(200).json(cards)
    })
    .catch(() => {
      res.status(500).json({"message": "Something went wrong!"})
    })
}