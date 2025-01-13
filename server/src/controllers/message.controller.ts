import { Request, Response } from "express";
import { MessageService } from "../services/message.service";
import { BaseController } from "./base.controller";
import { authenticate } from "../middlewares/auth.middleware";



export class MessageController extends BaseController {
    private messageService;

    constructor() {
        super();
        this.messageService = new MessageService();
    }

    async getFriendMessage(req: Request, res:Response) {
        try {
            const {id} = req.params;
            const user = await authenticate(req);

            const senderId = user._id;

            const result = await this.messageService.getFriendMessages(senderId.toString(), id);

            console.log("result", result);

            this.sendResponse(res, 200, result, "Messages fetched successfully");

        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }

    async sendMessage(req: Request, res:Response) {
        try {
            const user = await authenticate(req);
            const {text, image} = req.body;
            const {id} = req.params;
            const senderId = user._id;

            const result = await this.messageService.sendMessage(senderId.toString(), id,text, image);

            return this.sendResponse(res, 201, result, "Message sent successfully")

        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }
}