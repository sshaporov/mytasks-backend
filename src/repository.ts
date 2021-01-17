import * as fs from 'fs';

export const getCards = () => {
  // возвращаем промис а внутри промиса стрелочную функцию которую обещаю выполнить
  return new Promise((resolve,reject) => {
    fs.readFile('./src/cards.json', (err, buf) => {
      if (err) {
        console.log(err)
        reject()
      } else {
        resolve(JSON.parse(buf.toString()))
      }
    })
  })
}

export const addCard = async (cardTitle: string) => {
  let cards: any = await getCards()
  cards.push({ id:'3', title: cardTitle })
  return new Promise<void>((resolve, reject) => {
    fs.writeFile('./src/cards.json', JSON.stringify(cards), (err) => {
      if (err) {
        console.log(err)
        reject()
      } else {
        console.log('server - successfully written to file')
        resolve()
      }
    })
  })
}
