import {Request, Response} from 'express'
import Task from '../../models/tasks-model'

export const addTask = async (req: Request, res: Response) => {
  Task.create({ card_id: req.params.cardId, title: req.body.title, checked: false })
    .then((newTask) => {
      res.status(201).send({ item: newTask })
    })
    .catch(() => {
      // дописать текст ошибки
      res.status(400)
    })
}