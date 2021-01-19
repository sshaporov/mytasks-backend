import * as express from 'express'
import { addCard, changeCardTitle, getCards, removeCard } from '../repository/cards-repository'
import {addTask} from '../repository/task-repository';

const cards = express.Router()

cards.get('/', async (req, res) => {
  let cards = await getCards()
  res.send(cards)
})

cards.delete('/:id', async (req, res) => {
  await removeCard(req.params.id)
  res.send({ success: true })
})

cards.post('/', async (req, res) => {
  await addCard(req.body.title)
  res.send({ success: true })
})

cards.put('/:id', async (req, res) => {
  await changeCardTitle(req.params.id, req.body.title)
  res.send({ success: true })
})

cards.post('/tasks', async (req, res) => {
  await addTask(req.body.cardId, req.body.title)
  res.send({ success: true })
})

export default cards