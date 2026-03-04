import { registerUser, loginUser, logoutUser } from '../controllers/authController.js'
import { logSignin } from '../middleware/logSignin.js'
import express from 'express'

export const authRouter = express.Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', logSignin, loginUser)
authRouter.get('/logout', logoutUser)