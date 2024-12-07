import express from "express";
import { isAuthenticated, login, logOut, register, resetPassword, sendResetOtp, sendVerifyOtp, verfiyEmail } from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router()

authRouter.post('/register', register)
authRouter.post('/login', login)
authRouter.post('/logout', logOut)
authRouter.post('/send-verify-otp', userAuth, sendVerifyOtp)
authRouter.post('/verify-account', userAuth, verfiyEmail)
authRouter.get('/is-auth', userAuth, isAuthenticated)
authRouter.post('/send-reset-otp', sendResetOtp)
authRouter.post('/reset-password', resetPassword)

export default authRouter