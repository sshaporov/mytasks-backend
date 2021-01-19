import * as express from 'express'
import {addCard, getCards, removeCard} from './repository'

const cards = express.Router()

cards.get('/', async (req, res) => {
  let cards = await getCards()
  res.send(cards)
})

cards.delete('/:id', async (req, res) => {
  await removeCard(req.params.id)
  res.send({success: true})
})

cards.post('/', async (req, res) => {
  await addCard(req.body.title)
  res.send({success: true})
})

export default cards