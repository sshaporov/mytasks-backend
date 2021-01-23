import { Request, Response } from 'express'
import Task from '../../models/tasks-model'

export const getTasks = async (req: Request, res: Response) => {
  Task.find({ card_id: req.params.cardId })
    .exec()
    .then((tasks) => {
      res.status(201).json(tasks)
    })
    .catch(() => {
      res.status(500).json({"message": "Something went wrong!"})

    })
}