import { userModel } from "../models/user.model.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const registerUser = async (req, res, next) => {
    const { email, password, rol, lenguage } = req.body

    try {
        const hashedPassword = bcrypt.hashSync(password, 10)
        const user = await userModel.create({
            email,
            password: hashedPassword,
            rol,
            lenguage,
        })

        res.status(201).json({ message: "Usuario registrado exitosamente", user })
    } catch (error) {
        console.error("Error en el registro del usuario:", error)

        if (error.code === "23505") {
            return res.status(400).json({ message: "El email ya está registrado" })
        }

        next(error)
    }
}

export const loginUser = async (req, res, next) => {
    const { email, password } = req.body

    try {
        const user = await userModel.findByEmail(email)

        if (!user || !bcrypt.compareSync(password, user.password)) {
            return res.status(401).json({ message: "Credenciales inválidas" })
        }

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" })
        res.json({ message: "Inicio de sesión exitoso", token })
    } catch (error) {
        console.error("Error en el inicio de sesión:", error)
        next(error)
    }
}

export const getUser = async (req, res, next) => {
    try {
        const user = await userModel.findByEmail(req.user.email)

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" })
        }

        res.json({
            id: user.id,
            email: user.email,
            rol: user.rol,
            lenguage: user.lenguage,
        })
    } catch (error) {
        console.error("Error en el endpoint GET /usuarios:", error)
        next(error)
    }
}
