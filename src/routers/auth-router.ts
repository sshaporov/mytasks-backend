import * as express from 'express'
import {logIn} from '../controllers/auth/logIn'
import {createUser} from '../controllers/auth/createUser'
import {authMiddleware} from '../middleware/authMiddleware'
import {getMe} from '../controllers/auth/getMe'

const auth = express.Router()

auth.post('/login', logIn)
auth.post('/registration', createUser)
auth.get('/me', authMiddleware, getMe)

export default auth