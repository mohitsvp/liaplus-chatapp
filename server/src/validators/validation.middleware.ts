import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";
import { Request, Response, NextFunction } from "express";

export const validationMiddleware = (ValidatorClass: any) => async (req: Request, res: Response, next: NextFunction) => {
    const instance = plainToInstance(ValidatorClass, req.body);
    const errors = await validate(instance);

    if (errors.length > 0) {
        const validationErrors = errors.map((err) => ({
            property: err.property,
            constraints: err.constraints,
        }));

        res.status(400).json({
            success: false,
            message: "Validation failed",
            errors: validationErrors,
        });

        return;
    }
    next();
};
