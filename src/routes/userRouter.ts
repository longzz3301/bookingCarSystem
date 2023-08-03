import express from "express"
import CreateAccount from "../controllers/userControllers"


const userRoute = express.Router()

userRoute.post("/createAccount" , CreateAccount)

export default userRoute