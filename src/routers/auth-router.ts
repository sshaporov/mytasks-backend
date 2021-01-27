import * as express from 'express'
import {logIn} from '../controllers/auth/logIn'
import {createUser} from '../controllers/auth/createUser'
import {authMiddleware} from '../middleware/authMiddleware'
import {authMe} from '../controllers/auth/authMe'

const auth = express.Router()

auth.post('/login', logIn)
auth.post('/registration', createUser)
auth.get('/authme', authMiddleware, authMe)

export default auth