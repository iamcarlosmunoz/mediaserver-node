import { Router } from "express";
// import { verifyToken } from "../middlewares/authJwt";
import * as GenresController from "../controllers/genres.controller";

const router = Router();

router.get("/", GenresController.getGenres);

export default router;
