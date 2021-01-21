import {Request, Response} from 'express'
import Task from '../../models/tasks-model'

export const changeTask = async (req: Request, res: Response) => {
  Task.findByIdAndUpdate(req.params.taskId, req.body, {new: true})
    .then((updatedTask) => {
      res.status(200).send({item: updatedTask})
    })
    .catch(() => {
      res.status(400)
    })
}