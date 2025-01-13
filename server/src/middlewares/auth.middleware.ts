import { NextFunction, Request, Response } from "express";
import { LPError } from "../utils/error.utils";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config";
import UserModel from "../models/user.model";
import { UserValidatorResponse } from "../validators/auth.validator";

export const authenticate = async (req: Request): Promise<UserValidatorResponse> => {
        const token = req.cookies.authToken;

        console.log("token", token);

        if (!token) {
            throw new LPError("Unauthorised - No token found", 401);
        }

        const decoded = jwt.verify(token, JWT_SECRET_KEY);

        if (typeof decoded === "string" || !("userId" in decoded)) {
            throw new LPError("Unauthorised - Invalid Token", 403);
        }

        const user = await UserModel.findById(decoded.userId).select("-password");

        if (!user) {
            throw new LPError("User Not Found", 404);
        }

        return user;
}