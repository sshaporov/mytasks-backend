import * as express from 'express'
import {addCard} from '../controllers/cards/addCard'
import {getCards} from '../controllers/cards/getCards'
import {changeCardTitle} from '../controllers/cards/changeCardTitle'
import {removeCard} from '../controllers/cards/removeCard'
import {getTasks} from '../controllers/tasks/getTasks'
import {addTask} from '../controllers/tasks/addTask'
import {changeTask} from '../controllers/tasks/changeTask'
import {removeTask} from '../controllers/tasks/removeTask'
import {authMiddleware} from '../middleware/authMiddleware'

const cards = express.Router()

cards.get('/', authMiddleware, getCards)
cards.post('/', authMiddleware, addCard)
cards.put('/:cardId', authMiddleware, changeCardTitle)
cards.delete('/:cardId', authMiddleware, removeCard)
cards.get('/:cardId/tasks', authMiddleware, getTasks)
cards.post('/:cardId/tasks', authMiddleware, addTask)
cards.put('/:cardId/tasks/:taskId', authMiddleware, changeTask)
cards.delete('/:cardId/tasks/:taskId', authMiddleware, removeTask)

export default cards