import cors = require("cors")
const config = require('config')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// const whitelist = ['http://localhost:3000', 'http://example2.com'];
const corsOptions = {
  credentials: true,
  origin: (origin, callback) => {
    // if(whitelist.includes(origin || ""))
    //     return callback(null, true)
    //
    // callback(new Error('Not allowed by CORS'));
    //console.log("origin: ", origin);
    callback(null, true); // everyone is allowed
  }
};

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

app.get("/", (req, res) => {
  console.log('work route "/"')
  res.send("<h1>1</h1>")
})


const cards = [
  {id: '1', title: "What to lear"},
  {id: '2', title: "Travel tasks"},
]
app.get("/cards", cors(corsOptions), (req, res) => {
  console.log('work route "/cards"')
  res.send(cards)
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})