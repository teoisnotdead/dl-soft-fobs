import express from "express"
import cors from "cors"
import router from "./routes/routes.js"

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Routes
app.use(router)

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ message: "Ocurrió un error en el servidor", error: err.message })
})

export default app