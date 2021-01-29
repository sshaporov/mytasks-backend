import { Request, Response } from 'express'
import Task from '../../models/task-model'

export const addTask = async (req: Request, res: Response) => {
  const task = {
    card_id: req.params.cardId,
    title: req.body.title,
    checked: false
  }

  if(task.title === undefined) {
    res.status(400).json({message: 'No task title in the body!'})
  } else {
    Task.create(task)
      .then((newTask) => {
        res.status(201).json({item: newTask})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}