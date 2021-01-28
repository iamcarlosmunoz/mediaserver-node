import { Router } from "express";
import { verifyToken } from "../middlewares/authJwt";
import * as moviesController from "../controllers/movies.controller";

const router = Router();

router.get("/", moviesController.getMovies);
router.get("/:id", verifyToken, moviesController.getMovieById);
router.get("/file/:id", moviesController.getFileMovieById);

export default router;
