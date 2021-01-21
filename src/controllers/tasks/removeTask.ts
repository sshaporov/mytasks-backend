import {Request, Response} from 'express'
import Task from '../../models/tasks-model'

export const removeTask = async (req: Request, res: Response) => {
  // правильнее проверять пришедшие свойства на соответствие типов, чтоб в title: string, checked: boolean
  Task.findOneAndDelete({ _id: req.params.taskId, card_id: req.params.cardId })
    .then(() => {
      res.status(200).send()
    })
    .catch(() => {
      res.status(400)
    })
}