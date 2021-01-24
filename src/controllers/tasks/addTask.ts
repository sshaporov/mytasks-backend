import { Request, Response } from 'express'
import Task from '../../models/task-model'

export const addTask = async (req: Request, res: Response) => {
  Task.create({card_id: req.params.cardId, title: req.body.title, checked: false})
    .then((newTask) => {
      res.status(201).json({item: newTask})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}