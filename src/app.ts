import * as config from 'config'
import * as express from 'express'
import * as cors from 'cors'
import cards from './cards-router'

const PORT = config.get('port') || 3010

const app = express()

app.use(cors())

app.use('/cards', cards)

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