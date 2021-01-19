import { Router } from "express";
import * as authController from "../controllers/auth.controller";
import { checkDuplicateUsername } from "../middlewares/verifySignup";

const router = Router();

router.post("/signup", checkDuplicateUsername, authController.signup);

router.post("/signin", authController.signin);

export default router;
