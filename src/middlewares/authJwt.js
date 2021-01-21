import fs from "fs"
import jwt from "jsonwebtoken"
import config from "../config"

export const verifyToken = async (req, res, next) => {
  let token = req.headers["x-access-token"]

  if (!token) return res.status(403).json({ message: "No token provided" })

  try {
    const users = await JSON.parse(fs.readFileSync(config.urlUsersData, "utf-8"))

    const decoded = jwt.verify(token, config.SecretKey)
    req.userId = decoded.id

    const userFound = await users.find((user) => user.id === req.userId)
    if (!userFound) return res.status(404).json({ message: "User unauthorized" })

    next()
  } catch (error) {
    console.error("VERIFY_TOKEN_ERROR: ", error)
    return res.status(401).json({ error: "Invalid token" })
  }
}
