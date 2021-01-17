// данные для фронта
let cards = [
  { id: '1', title: 'What to lear' },
  { id: '2', title: 'Travel tasks' },
]

export const getCards = () => {
  return cards
}

export const addCard = (cardTitle: string) => {
    cards.push({ id:'3', title: cardTitle })
}
