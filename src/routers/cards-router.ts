import * as express from 'express'
import { addCard } from '../controllers/cards/addCard'
import { getCards } from '../controllers/cards/getCards'
import { changeCardTitle } from '../controllers/cards/changeCardTitle'
import { removeCard } from '../controllers/cards/removeCard'
import { getTasks } from '../controllers/tasks/getTasks'
import { addTask } from '../controllers/tasks/addTask'
import {changeTask} from '../controllers/tasks/changeTask'
import {removeTask} from '../controllers/tasks/removeTask'

const cards = express.Router()

cards.get('/', (req, res) => getCards(req, res))
cards.post('/', (req, res) => addCard(req, res))
cards.put('/:cardId',(req, res) => changeCardTitle(req, res))
cards.delete('/:cardId', (req, res) => removeCard(req, res))
cards.get('/:cardId/tasks', (req, res) => getTasks(req, res))
cards.post('/:cardId/tasks', (req, res) => addTask(req, res))
cards.put('/:cardId/tasks/:taskId', (req, res) => changeTask(req, res))
cards.delete('/:cardId/tasks/:taskId', (req, res) => removeTask(req, res))

export default cards