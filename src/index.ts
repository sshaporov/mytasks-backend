import * as express from 'express'
import * as cors from 'cors'
import cards from './routers/cards-router'
import auth from './routers/auth-router'
import * as bodyParser from 'body-parser'
import * as mongoose from 'mongoose'
import {MONGO_URI, MONGOOSE_CONNECT_OPTIONS, PORT} from './config'
import * as https from 'https'
import * as fs from 'fs'


const key = fs.readFileSync('./key.pem')
const cert = fs.readFileSync('./cert.pem')

const app = express()

const server = https.createServer({key: key, cert: cert }, app)

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use('/cards', cards)
app.use('/auth', auth)

mongoose.connect(MONGO_URI, MONGOOSE_CONNECT_OPTIONS)
  .then(() => server.listen(PORT, () => {
    console.log(`Server is running in https://localhost:${PORT}`)
  }))
  .catch(err => {
    console.log('Mongo server error', err)
  })

process.on("unhandledRejection", (reason, p) => {
  console.log("MyTasks: ", reason, p)
});


