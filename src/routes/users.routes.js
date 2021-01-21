import { Router } from "express";
import { verifyToken } from "../middlewares/authJwt";
import * as usersController from "../controllers/users.controller";

const router = Router();

router.get("/", usersController.getUsers);
router.get("/watching", verifyToken, usersController.getWatchingList);
router.post("/watching", verifyToken, usersController.addItemToWatchingMovies);
router.put("/watching", verifyToken, usersController.updateWatchingMovies);

export default router;
