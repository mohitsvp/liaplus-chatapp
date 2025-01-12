import express from "express";
import { validationMiddleware } from "../validators/validation.middleware";
import { UserController } from "../controllers/user.controller";
import { authenticate } from "../middlewares/auth.middleware";

const router = express.Router();

const userController = new UserController();

router.patch("/update-profile", userController.updateProfile.bind(userController));

export default router;