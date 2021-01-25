import * as express from 'express'
import {logIn} from '../controllers/auth/logIn'
import {createUser} from '../controllers/auth/createUser'

const auth = express.Router()

auth.post('/login', logIn)
auth.post('/registration', createUser)

export default auth