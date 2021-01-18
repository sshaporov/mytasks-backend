import * as express from 'express'
import {addCard, getCards} from './repository'

const cards = express.Router()

cards.get('/', async (req, res) => {
  let cards = await getCards()
  res.send(cards)
})

cards.post('/', async (req, res) => {
  await addCard('Test card!')
  res.send({success: true})
})

export default cards