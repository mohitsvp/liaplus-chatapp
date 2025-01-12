import cloudinary from "../lib/cloudinary";
import { authenticate } from "../middlewares/auth.middleware";
import UserModel from "../models/user.model";
import { UserService } from "../services/user.service";
import { LPError } from "../utils/error.utils";
import { BaseController } from "./base.controller";
import { Request, Response } from "express";


export class UserController extends BaseController {
    private userService : UserService;

    constructor() {
        super();
        this.userService = new UserService();   
    }

    async getContacts(req: Request, res:Response) {
        try {
            const user = await authenticate(req);

            const result = await this.userService.getContacts(user._id.toString());

            this.sendResponse(res, 200, result, "Contacts fetched successfully");
        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }

    async updateProfile(req: Request, res:Response) {
        try {
            const user = await authenticate(req);

            const {profilePic} = req.body;
            const userId = user._id;

            if (!profilePic) {
                throw new LPError("Profile pic is required", 400);
            }

            const result = await this.userService.updateProfile(profilePic, userId.toString());

            this.sendResponse(res, 200, result, "Profile Updated Successfully");
        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }


    
}