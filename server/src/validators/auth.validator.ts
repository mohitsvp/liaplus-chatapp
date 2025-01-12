import { IsDefined, IsEmail, IsUrl, Min, MinLength } from "class-validator";
import { Types } from "mongoose";


export class UserValidatorRequest {
   
    @IsDefined()
    @IsEmail()
    email! : string;

    @IsDefined()
    @MinLength(3)
    firstName! : string;

    @IsDefined()
    @MinLength(3)
    lastName! : string;

    @IsDefined()
    @MinLength(8)
    password! : string;

    profilePic? : string;
}

export class UserValidatorResponse {
    _id! : Types.ObjectId;
    email! : string;
    firstName! : string;
    lastName! : string;
    password! : string;
    profilePic! : string;
    created_at! : Date;
}

export class LoginValidatorRequest {
    @IsDefined()
    @IsEmail()
    email!: string;

    @IsDefined()
    password!: string;
}