import * as express from 'express'
import {addCard} from '../controllers/cards/addCard'
import {getCards} from '../controllers/cards/getCards'
import {changeCardTitle} from '../controllers/cards/changeCardTitle'
import {removeCard} from '../controllers/cards/removeCard'
import {getTasks} from '../controllers/tasks/getTasks'
import {addTask} from '../controllers/tasks/addTask'
import {changeTask} from '../controllers/tasks/changeTask'
import {removeTask} from '../controllers/tasks/removeTask'

const cards = express.Router()

cards.get('/', getCards)
cards.post('/', addCard)
cards.put('/:cardId', changeCardTitle)
cards.delete('/:cardId', removeCard)
cards.get('/:cardId/tasks', getTasks)
cards.post('/:cardId/tasks', addTask)
cards.put('/:cardId/tasks/:taskId', changeTask)
cards.delete('/:cardId/tasks/:taskId', removeTask)

export default cards