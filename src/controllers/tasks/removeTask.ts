import {Request, Response} from 'express'
import Task from '../../models/task-model'

export const removeTask = async (req: Request, res: Response) => {
  const taskId = req.params.taskId
  const cardId = req.params.cardId

  Task.findOneAndDelete({_id: taskId, card_id: cardId})
    .exec()
    .then(() => {
      res.status(200).json({success: true})
    })
    .catch(err => {
      res.status(500).json(err)
    })
}