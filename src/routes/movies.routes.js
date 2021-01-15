import { Router } from "express"
import fs from "fs"

const router = Router()

let movies = JSON.parse(fs.readFileSync("src/data/movies.json", "utf-8"))

router.get("/", function (req, res) {
    res.json(movies)
})

router.get("/:id", async function (req, res) {

    let movie = undefined

    await movies.forEach(element => {
        if (element.id === parseInt(req.params.id, 10)) {
            movie = element;
            return
        }
    })

    res.json(movie)
})

router.get("/file/:id", async function (req, res) {

    let movie = undefined

    await movies.forEach(element => {
        if (element.id === parseInt(req.params.id, 10)) {
            movie = element;
            return
        }
    })

    res.sendFile(movie.file)
})

export default router

