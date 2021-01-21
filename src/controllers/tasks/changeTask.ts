import {Request, Response} from 'express'
import Task from '../../models/tasks-model'

export const changeTask = async (req: Request, res: Response) => {

  const keys = Object.keys(req.body)

  if (keys.length === 1) {
    if (keys[0] === 'checked') {
        Task.findByIdAndUpdate(req.params.taskId, {checked: req.body.checked}, {new: true})
          .then((updatedTask) => {res.status(200).send({item: updatedTask})})
          .catch(() => {res.status(400)})
    } else if (keys[0] === 'title') {
        Task.findByIdAndUpdate(req.params.taskId, {title: req.body.title}, {new: true})
          .then((updatedTask) => {res.status(200).send({item: updatedTask})})
          .catch(() => {res.status(400)})
    } else res.status(400)

  } else res.status(400)
}