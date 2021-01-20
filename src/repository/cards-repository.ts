import Cards from '../models/cards-model'

// export const getCards = () => {
//   return Cards.find()
// }

export const removeCard = (cardId: string) => {
  return Cards.deleteOne({ _id: cardId} )
}

export const changeCardTitle = (cardId: string, newCardTitle: string) => {
  return Cards.updateOne({ _id: cardId }, { $set: { title: newCardTitle } })
}

// export const addCard = async (cardTitle: string) => {
//   const card = new Cards({ title: cardTitle })
//   return card.save()
// }




