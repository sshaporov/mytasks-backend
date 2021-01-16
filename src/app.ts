import {mongo} from 'mongoose';

const config = require('config')
const express = require('express')
const mongoose = require('mongoose')

const app = express()

// подключаемся к базе данных Мангус (оборачиваем в функцию чтобы использовать асинк/авет, а не обрабатывать промис)
async function start() {
  try {
    // функция возвращет промис
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
  } catch (error) {
    console.log('Server error', error)
    process.exit(1)
  }
}
start()

const PORT = config.get('port') || 3010

app.get("/", (req, res) => {
  res.send("<h1>1</h1>")
})

app.listen(PORT, () => {
  console.log(`Server is running in http://localhost:${PORT}`)
})