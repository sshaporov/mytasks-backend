import Task from '../models/tasks-model'
import * as mongoose from 'mongoose'

export const addTask = async (cardId: mongoose.Types.ObjectId, taskTitle: string) => {
  const task = new Task({
      card_id: cardId,
      title: taskTitle,
      checked: false
    })
  return task.save()
}


