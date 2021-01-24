import {Request, Response} from 'express'
import Task from '../../models/task-model'

export const removeTask = async (req: Request, res: Response) => {
  Task.findOneAndDelete({ _id: req.params.taskId, card_id: req.params.cardId })
    .exec()
    .then(() => {
      res.status(200).json({success: true})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}