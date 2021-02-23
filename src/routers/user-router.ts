import * as express from 'express'
import {authMiddleware} from '../middleware/authMiddleware'
import {changeUserData} from '../controllers/user/changeUserData'

const user = express.Router()

user.put('/',authMiddleware, changeUserData)

export default user