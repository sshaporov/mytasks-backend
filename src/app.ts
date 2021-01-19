import * as config from 'config'
import * as express from 'express'
import * as cors from 'cors'
import cards from './routers/cards-router'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'

const PORT = config.get('port') || 3010

const app = express()

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/cards', cards)

app.use((req, res) => {
  res.send(404)
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})

// подключаемся к базе данных Мангус (оборачиваем в функцию чтобы использовать асинк/авет, а не обрабатывать промис)
async function start() {
  try {
    // функция возвращет промис
    await mongoose.connect(config.get('mongoUri'), {
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