import {Request, Response} from 'express'
import Card from '../../models/cards-model'

export const getCards = async (req: Request, res: Response) => {
  Card.find().then((cards) => {
    res.status(201).send(cards)
  })
    .catch(() => {
      res.status(400)
    })
}