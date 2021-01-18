import * as config from 'config'
import * as express from 'express'
import {addCard, getCards} from './repository'
import * as cors from 'cors'

// const mongoose = require('mongoose')

const app = express()
const PORT = config.get('port') || 3010

app.use(cors())

app.get("/cards", async (req, res) => {
  let cards = await getCards()
  res.send(JSON.stringify(cards))
})

app.post("/cards", async (req, res) => {
  await addCard('Test card!')
  res.send(JSON.stringify({success: true}))
})

app.use((req, res) => {
  res.send(404)
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})

// подключаемся к базе данных Мангус (оборачиваем в функцию чтобы использовать асинк/авет, а не обрабатывать промис)
// async function start() {
//   try {
//     // функция возвращет промис
//     await mongoose.connect(config.get('mongoUri'), {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//   } catch (error) {
//     console.log('Server error', error)
//     process.exit(1)
//   }
// }
// start()