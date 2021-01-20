import { Request, Response } from 'express'
import Card from '../../models/cards-model'

export const addCard = async (req: Request, res: Response) => {
  Card.create({ title: req.body.title })
    .then((newCard) => {
      res.status(201).send({ item: newCard })
    })
}