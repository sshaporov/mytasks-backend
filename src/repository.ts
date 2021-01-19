import {readJsonFromFile, writeJsonToFile} from './fs-utils'
import * as mongoose from 'mongoose'

// создаем схему (набор правил)
const cardsSchema = new mongoose.Schema({
  title: String,
})
// создаем класс на основе которого будет создавать объекты соотвествующие этой схеме
const Card = mongoose.model('Cards', cardsSchema)

export const getCards = () => {
  // return readJsonFromFile('cards.json')
  return Card.find()
}

export const addCard = async (cardTitle: string) => {
  // создаем кароточку на основе класса и подставляем данные
  const card1 = new Card({title: cardTitle})

  // записываем карточку в БД
  return card1.save().then()

  // let cards: any = await getCards()
  // cards.push({ id:'3', title: cardTitle })
  // return writeJsonToFile('cards.json', cards)
}
