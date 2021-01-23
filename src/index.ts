import * as express from 'express'
import * as cors from 'cors'
import cards from './routers/cards-router'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import {MONGO_URI, PORT} from './config'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/cards', cards)

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})

// подключаемся к базе данных Мангус (оборачиваем в функцию чтобы использовать асинк/авет, а не обрабатывать промис)
async function start() {
  try {
    // функция возвращет промис
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  } catch (e) {
    console.log('Mongo server error', e)
    process.exit(1)
  }
}
start()