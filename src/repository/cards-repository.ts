import Cards from '../models/cards-model'

export const getCards = () => {
  return Cards.find()
}

export const removeCard = (cardId: string) => {
  return Cards.deleteOne({ _id: cardId} )
}

export const changeCardTitle = (cardId: string, newCardTitle: string) => {
  return Cards.updateOne({ _id: cardId }, { $set: { title: newCardTitle } })
}

export const addCard = async (cardTitle: string) => {
  // создаем кароточку на основе класса и подставляем данные
  const card = new Cards({ title: cardTitle })

  // записываем карточку в БД
  return card.save()
}


