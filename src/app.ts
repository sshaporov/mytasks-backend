import { cardsController } from './cardsController'
import * as http from 'http';
import * as config from 'config';

// const express = require('express')
// const mongoose = require('mongoose')

//const app = express()

// const whitelist = ['http://localhost:3000', 'http://example2.com'];
// const corsOptions = {
//   credentials: true,
//   origin: (origin, callback) => {
//     // if(whitelist.includes(origin || ""))
//     //     return callback(null, true)
//     //
//     // callback(new Error('Not allowed by CORS'));
//     //console.log("origin: ", origin);
//     callback(null, true); // everyone is allowed
//   }
// }

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

const PORT = config.get('port') || 3010

let cors = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Request-Method', '*')
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET')
  res.setHeader('Access-Control-Allow-Headers', '*')
  if ( req.method === 'OPTIONS' ) {
    res.writeHead(200);
    res.end()
    return true
  }
  return false
}

const server = http.createServer((req, res) => {
  if (cors(req, res)) return

  switch (req.url) {
    case '/cards':
      cardsController(req, res)
      break
    default:
      res.write('PAGE NOT FOUND')
  }
})

// app.get("/", (req, res) => {
//   res.send("<h1>1</h1>")
// })
//
// app.get("/cards", cors(corsOptions), (req, res) => {
//   res.send(getCards())
// })
//
// app.post("/cards", cors(corsOptions), (req, res) => {
//   addCard('Test title card')
//   res.send('server - card created successfully')
// })
//
// app.listen(PORT, () => {
//   console.log(`Server is running in http://localhost:${PORT}`)
// })

server.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})