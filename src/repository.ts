import {readJsonFromFile, writeJsonToFile} from './fs-utils'
import * as mongoose from 'mongoose'
import {Types} from 'mongoose'

// создаем схему (набор правил)
const cardsSchema = new mongoose.Schema({
  title: String,
})
// создаем класс на основе которого будет создавать объекты соотвествующие этой схеме
const Card = mongoose.model('Cards', cardsSchema)

export const getCards = () => {
  return Card.find()
}

export const removeCard = (cardId: string) => {
  return Card.deleteOne({ _id: cardId} )
}

export const changeCardTitle = (cardId: string, newCardTitle: string) => {
  return Card.updateOne({ _id: cardId }, { $set: { title: newCardTitle } })
}

export const addCard = async (cardTitle: string) => {
  // создаем кароточку на основе класса и подставляем данные
  const card1 = new Card({ title: cardTitle })

  // записываем карточку в БД
  return card1.save().then()
}


