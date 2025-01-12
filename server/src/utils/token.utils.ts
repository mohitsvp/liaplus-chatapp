import { Response } from "express"
import jwt from "jsonwebtoken";
import { environment, JWT_SECRET_KEY } from "../config";

export const generateToken = (userId : string, res:Response) => {
    const token = jwt.sign({userId}, JWT_SECRET_KEY, {
        expiresIn : "7d"
    });

    res.cookie("authToken", token, {
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        secure: environment !== 'development' 
    });

    return token;
}