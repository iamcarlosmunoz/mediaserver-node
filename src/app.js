import express from "express"
import cors from "cors"
import path from "path"
import bodyParser from "body-parser"
import config from "./config"
import MoviesRoutes from "./routes/movies.routes"
import UsersRoutes from "./routes/users.routes"

const app = express()

app.use(cors())
app.set("port", config.serverPort || 4000)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static("client/build/"));
app.use("/img", express.static(path.join(__dirname, "images/")));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"))
})
app.get("/api/genres", (req, res) => {
    res.sendFile(path.join(__dirname, "data/genres.json"))
})

app.use("/api/movies", MoviesRoutes)
app.use("/api/users", UsersRoutes)

app.use((req, res, next) => {
    res.sendFile(path.join(__dirname, ".." ,"client/build/index.html"))
});

export default app