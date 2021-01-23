import { Request, Response } from 'express'
import Card from '../../models/cards-model'

export const addCard = async (req: Request, res: Response) => {
  Card.create({title: req.body.title})
    .then(newCard => {
      res.status(201).json({item: newCard})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}