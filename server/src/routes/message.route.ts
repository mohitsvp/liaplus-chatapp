import express from "express";
import { UserController } from "../controllers/user.controller";
import { MessageController } from "../controllers/message.controller";

const router = express.Router();

const messageController = new MessageController();

router.get("/:id", messageController.getFriendMessage.bind(messageController));
router.post("/send/:id", messageController.sendMessage.bind(messageController));

export default router;