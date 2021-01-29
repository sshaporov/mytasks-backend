import {Request, Response} from 'express'
import Task from '../../models/task-model'

export const changeTask = async (req: Request, res: Response) => {
  const taskId = req.params.taskId
  const body = req.body

  if(body.title === undefined && body.checked === undefined) {
    res.status(400).json({message: 'No data in the body'})
  } else {
    Task.findByIdAndUpdate(taskId, body, {new: true})
      .exec()
      .then(updatedTask => {
        res.status(200).json({item: updatedTask})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}