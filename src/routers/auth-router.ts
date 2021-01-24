import * as express from 'express'
import {logIn} from '../controllers/auth/logIn'

const auth = express.Router()

auth.post('/login', logIn)

export default auth