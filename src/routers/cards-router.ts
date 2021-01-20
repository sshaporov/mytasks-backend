import * as express from 'express'
import { addTask, getTasks } from '../repository/task-repository'
import { addCard } from '../controllers/cards/addCard'
import { getCards } from '../controllers/cards/getCards'
import { changeCardTitle } from '../controllers/cards/changeCardTitle'
import { removeCard } from '../controllers/cards/removeCard'

const cards = express.Router()

cards.get('/', (req, res) => getCards(req, res))
cards.post('/', (req, res) => addCard(req, res))
cards.put('/:cardId',(req, res) => changeCardTitle(req, res))
cards.delete('/:cardId', (req, res) => removeCard(req, res))



cards.get('/:cardId/tasks', async (req, res) => {
  let tasks = await getTasks(req.params.cardId)
  res.status(200).send(tasks)
})

cards.post('/:cardId/tasks', async (req, res) => {
  await addTask(req.params.cardId, req.body.title)
  res.status(201).send({ success: true })
})

// cards.post('/tasks/:id', async (req, res) => {
//   await removeTask(req.params.id)
//   res.send({ success: true })
// })

export default cards