import { Request, Response } from 'express'
import Task from '../../models/tasks-model'

export const getTasks = async (req: Request, res: Response) => {
  Task.find({ card_id: req.params.cardId })
    .then((tasks) => {
      res.status(201).send(tasks)
    })
    .catch(() => {
      // дописать текст ошибки
      res.status(400)
    })
}