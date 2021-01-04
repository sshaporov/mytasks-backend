import express from 'express'
const app = express()
const port = 3010

app.get('/', (req, res) => {
    res.send('Hello World!!!!!!')
})

app.listen(port, () => {
    console.log(`MyTasks app API started on http://localhost:${port}`)
})