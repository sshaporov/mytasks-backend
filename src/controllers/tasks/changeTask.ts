import {Request, Response} from 'express'
import Task from '../../models/task-model'

export const changeTask = async (req: Request, res: Response) => {
  const taskId = req.params.taskId
  const title = req.body.title

  if(title === undefined) {
    res.status(400).json({message: 'No task title in the body'})
  } else {
    Task.findByIdAndUpdate(taskId, {title}, {new: true})
      .exec()
      .then(updatedTask => {
        res.status(200).json({item: updatedTask})
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
}