import { Router } from "express"
import { verifyToken } from "../middlewares/authJwt";
import * as moviesController from "../controllers/movies.controller"

const router = Router()

router.get("/", verifyToken, moviesController.getMovies)
router.get("/:id", verifyToken, moviesController.getMovieById)
router.get("/file/:id", verifyToken, moviesController.getFileMovieById)

export default router

