import {Request, Response} from 'express'
import Task from '../../models/tasks-model'

export const changeTask = async (req: Request, res: Response) => {
  // правильнее проверять пришедшие свойства на соответствие типов, чтоб в title: string, checked: boolean
  Task.findByIdAndUpdate(req.params.taskId, req.body, {new: true})
    .exec()
    .then((updatedTask) => {
      res.status(200).json({item: updatedTask})
    })
    .catch(() => {
      res.status(500).json({"message": "Something went wrong!"})
    })
}