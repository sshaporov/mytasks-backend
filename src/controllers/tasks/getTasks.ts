import { Request, Response } from 'express'
import Task from '../../models/task-model'

export const getTasks = async (req: Request, res: Response) => {
  const cardId = req.params.cardId

  Task.find({card_id: cardId})
    .exec()
    .then(tasks => {
      res.status(200).json(tasks)
    })
    .catch(err => {
      res.status(500).json(err)
    })
}