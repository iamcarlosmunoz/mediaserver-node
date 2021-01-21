import express from "express"
import path from "path"
import bodyParser from "body-parser"
import config from "./config"

import genresRoutes from "./routes/genres.routes"
import moviesRoutes from "./routes/movies.routes"
import usersRoutes from "./routes/users.routes"
import authRoutes from "./routes/auth.routes"

const app = express()

app.set("port", config.serverPort || 4000)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static("client/build/"))

app.use("/img", express.static(path.join(__dirname, "images/")))

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "client/build/index.html"))
)

app.use("/api/auth", authRoutes)
app.use("/api/genres", genresRoutes)
app.use("/api/movies", moviesRoutes)
app.use("/api/users", usersRoutes)

app.use((req, res, next) =>
  res.sendFile(path.join(__dirname, "..", "client/build/index.html"))
)

export default app
