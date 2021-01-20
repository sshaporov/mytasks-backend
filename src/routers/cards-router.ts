import * as express from 'express'
import { changeCardTitle, removeCard } from '../repository/cards-repository'
import { addTask, getTasks } from '../repository/task-repository'
import { addCard } from '../controllers/cards/addCard';
import {getCards} from '../controllers/cards/getCards';

const cards = express.Router()

// cards.get('/', async (req, res) => {
//   let cards = await getCards()
//   res.status(200).send(cards)
// })

cards.get('/', (req, res) => getCards(req, res))

// cards.post('/', async (req, res) => {
//   await addCard(req.body.title)
//   res.status(201).send()
// })

cards.post('/', (req, res) => addCard(req, res))

cards.delete('/:cardId', async (req, res) => {
  await removeCard(req.params.cardId)
  res.status(200).send({ success: true })
})

cards.put('/:cardId', async (req, res) => {
  await changeCardTitle(req.params.cardId, req.body.title)
  res.status(200).send({ success: true })
})

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