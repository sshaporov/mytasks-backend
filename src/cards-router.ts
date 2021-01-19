import * as express from 'express'
import {addCard, getCards} from './repository'

const cards = express.Router()

cards.get('/', async (req, res) => {
  let cards = await getCards()
  res.send(cards)
})

cards.get('/:id', async (req, res) => {
  const cardId = req.params.id
  let cards: any = await getCards()
  const card = cards.find(card => card.id === cardId)
  if(card) {
    res.send(card)
  } else {
    res.send(404)
  }
})

cards.post('/', async (req, res) => {
  await addCard(req.body.title)
  res.send({success: true})
})

export default cards