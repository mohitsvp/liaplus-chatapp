import { AuthService } from "../services/auth.service";
import { BaseController } from "./base.controller";
import { Request, Response } from "express";
import { generateToken } from "../utils/token.utils";
import { authenticate } from "../middlewares/auth.middleware";


export class AuthController extends BaseController {
    private authService : AuthService;

    constructor() {
        super();
        this.authService = new AuthService();   
    }

    async register(req: Request, res:Response): Promise<void> {
        try {
            const user = req.body;
            const result = await this.authService.register(user);
            const token = generateToken(result._id, res);
            this.sendResponse(res, 201, token, "User Registered Successfully")
        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }

    async login(req: Request, res: Response) : Promise<void> {
        try {
            const {email, password} = req.body;
            const result = await this.authService.login(email, password);
            const token = generateToken(result._id.toString(), res);
            this.sendResponse(res, 201, {
                _id : result._id,
                firstName : result.firstName,
                lastName : result.lastName,
                profiePic : result.profilePic,
                email: result.email
            }, "User Login Successfull")
        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }

    async logOut(req: Request, res:Response) : Promise<void> {
        try {
            res.cookie("authToken", "", {maxAge : 0});
            this.sendResponse(res, 200, "", "User logged out successfully");
        } catch (error: any) {
            this.sendError(res, error.statusCode || 500, error);
        }
    }

    async check(req: Request, res:Response) : Promise<void> {
        try {
            const user = await authenticate(req);
            this.sendResponse(res, 200, user, "User is authenticated")
        } catch (error: any) {
            console.log("error ", error)
            this.sendError(res, error.statusCode || 500, error);
        }
    }

}