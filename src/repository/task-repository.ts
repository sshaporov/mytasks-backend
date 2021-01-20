import Task from '../models/tasks-model'
import Cards from '../models/cards-model'

export const getTasks = (cardId: string) => {
  return Task.find({ card_id: cardId })
}

export const addTask = async (cardId: string, taskTitle: string) => {
  const task = new Task({
      card_id: cardId,
      title: taskTitle,
      checked: false
    })
  return task.save()
}

export const removeTask = (taskId: string) => {
  return Cards.deleteOne({ _id: taskId} )
}




