import * as express from 'express'
import { addCard } from '../controllers/cards/addCard'
import { getCards } from '../controllers/cards/getCards'
import { changeCardTitle } from '../controllers/cards/changeCardTitle'
import { removeCard } from '../controllers/cards/removeCard'
import {getTasks} from '../controllers/tasks/getTasks'
import {addTask} from '../controllers/tasks/addTask';

const cards = express.Router()

cards.get('/', (req, res) => getCards(req, res))
cards.post('/', (req, res) => addCard(req, res))
cards.put('/:cardId',(req, res) => changeCardTitle(req, res))
cards.delete('/:cardId', (req, res) => removeCard(req, res))
cards.get('/:cardId/tasks', (req, res) => getTasks(req, res))
cards.post('/:cardId/tasks', (req, res) => addTask(req, res))

// cards.post('/tasks/:id', async (req, res) => {
//   await removeTask(req.params.id)
//   res.send({ success: true })
// })

export default cards