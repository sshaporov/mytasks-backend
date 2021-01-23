import {Request, Response} from 'express'
import Task from '../../models/tasks-model'

export const removeTask = async (req: Request, res: Response) => {
  // правильнее проверять пришедшие свойства на соответствие типов, чтоб в title: string, checked: boolean
  Task.findOneAndDelete({ _id: req.params.taskId, card_id: req.params.cardId })
    .exec()
    .then(() => {
      res.status(200).json({success: true})
    })
    .catch(() => {
      res.status(500).json({"message": "Something went wrong!"})
    })
}