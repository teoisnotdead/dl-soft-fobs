import { DB } from "../config/db.js"
import format from "pg-format"

export const userModel = {
    create: async ({ email, password, rol, lenguage }) => {
        try {
            const query = format(
                "INSERT INTO usuarios (email, password, rol, lenguage) VALUES (%L, %L, %L, %L) RETURNING *",
                email,
                password,
                rol,
                lenguage
            )
            const { rows } = await DB.query(query)
            return rows[0]
        } catch (error) {
            console.error("Error al crear usuario:", error)
            throw error
        }
    },

    findByEmail: async (email) => {
        try {
            const query = format("SELECT * FROM usuarios WHERE email = %L", email)
            const { rows } = await DB.query(query)
            return rows[0]
        } catch (error) {
            console.error("Error al buscar usuario por email:", error)
            throw error
        }
    },
}
