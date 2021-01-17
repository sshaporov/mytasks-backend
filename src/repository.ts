const fs = require('fs')

export const getCards = () => {

  // возвращаем промис а внутри промиса стрелочную функцию которую обещаю выполнить
  return new Promise((resolve,reject) => {
    fs.readFile("./src/cards.json", function (err, buf) {
      resolve(buf.toString())
    })
  })
}

export const addCard = (cardTitle: string) => {
    //cards.push({ id:'3', title: cardTitle })
}
