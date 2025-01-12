import express from "express";
import { AuthController } from "../controllers/auth.controller";
import { LoginValidatorRequest, UserValidatorRequest } from "../validators/auth.validator";
import { validationMiddleware } from "../validators/validation.middleware";

const router = express.Router();

const authController = new AuthController();

router.post("/register", validationMiddleware(UserValidatorRequest) ,authController.register.bind(authController));
router.post("/login", validationMiddleware(LoginValidatorRequest), authController.login.bind(authController));
router.post("/logout", authController.logOut.bind(authController));
router.get("/check", authController.check.bind(authController));

export default router;