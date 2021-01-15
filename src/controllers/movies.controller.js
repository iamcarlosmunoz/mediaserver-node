import fs from "fs"
import config from "../config"

export const getMovies = async (req, res) => {

    try {

        const movies = await JSON.parse(fs.readFileSync(config.urlMoviesData, "utf-8"))

        res.json(movies)

    } catch (error) {
        console.error("GET_MOVIES_ERROR: ", error)
        return res.status(500).json({ error: "Array of movies not obtained" })
    }

}

export const getMovieById = async (req, res) => {

    try {

        const movies = await JSON.parse(fs.readFileSync(config.urlMoviesData, "utf-8"))

        const movieFound = await movies.find( movie => movie.id === parseInt(req.params.id, 10))

        if (!movieFound) return res.status(400).json({ message: "Movie not found" })

        res.json(movieFound)

    } catch (error) {
        console.error("GET_MOVIE_BY_ERROR: ", error)
        return res.status(500).json({ error: "The movie not obtained" })
    }

}

export const getFileMovieById = async (req, res) => {

    try {

        const movies = await JSON.parse(fs.readFileSync(config.urlMoviesData, "utf-8"))

        const movieFound = await movies.find( movie => movie.id === parseInt(req.params.id, 10))

        if (!movieFound) return res.status(400).json({ message: "Movie not found" })

        res.sendFile(movieFound.file)

    } catch (error) {
        console.error("GET_FILE_MOVIE_BY_ERROR: ", error)
        return res.status(500).json({ error: "The file movie not obtained" })
    }

}


