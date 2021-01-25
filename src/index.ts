import * as express from 'express'
import * as cors from 'cors'
import cards from './routers/cards-router'
import auth from './routers/auth-router'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import {MONGO_URI, MONGOOSE_CONNECT_OPTIONS, PORT} from './config'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/cards', cards)
app.use('/auth', auth)

mongoose.connect(MONGO_URI, MONGOOSE_CONNECT_OPTIONS)
  .then(() => app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
  }))
  .catch(err => {
    console.log('Mongo server error', err)
  })



