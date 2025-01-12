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

    async updateProfile(req: Request, res:Response) {
        try {
            const user = await authenticate(req);

            const {profilePic} = req.body;
            const userId = user._id;

            if (!profilePic) {
                throw new LPError("Profile pic is required", 400);
            }

            const uploadResponse = await cloudinary.uploader.upload(profilePic);

            const updatedUser = await UserModel.findByIdAndUpdate(userId, {profilePic : uploadResponse.secure_url}, {new: true})

            this.sendResponse(res, 200, "", "Profile Updated Successfully");
        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }


    
}