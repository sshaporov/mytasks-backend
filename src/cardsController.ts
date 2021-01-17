import { getCards, addCard } from './repository'

export const cardsController = async (req, res) => {

  if (req.method === 'GET') {
    // action
    let cards = await getCards()
    res.write(JSON.stringify(cards))
    res.end()
  }

  if (req.method === 'POST') {
    // action
    await addCard('Test card!')
    res.write(JSON.stringify('server - card was added'))
    res.end()
  }
}