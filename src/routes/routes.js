import { Router } from "express"
import { registerUser, loginUser, getUser } from "../controllers/users.controller.js"
import { verifyToken } from "../middlewares/auth.middleware.js"

const router = Router()

router.post("/usuarios", registerUser)
router.post("/login", loginUser)
router.get("/usuarios", verifyToken, getUser)

export default router
