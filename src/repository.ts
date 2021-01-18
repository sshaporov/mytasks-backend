import {readJsonFromFile, writeJsonToFile} from './fs-utils';

export const getCards = () => {
  return readJsonFromFile('cards.json')
}

export const addCard = async (cardTitle: string) => {
  let cards: any = await getCards()
  cards.push({ id:'3', title: cardTitle })
  return writeJsonToFile('cards.json', cards)
}
