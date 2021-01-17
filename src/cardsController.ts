import { getCards, addCard } from './repository'

export const cardsController = (req, res) => {
  if (req.method === 'POST') {
    addCard('Test card!')
    res.write(JSON.stringify('server - card was added'))
  }

  if (req.method === 'GET') {
    res.write(JSON.stringify(getCards()))
  }
}