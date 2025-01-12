import mongoose, { Document } from "mongoose";
import { UserValidatorResponse } from "../validators/auth.validator";




const userSchema = new mongoose.Schema(
    {
        email : {type: String, unique: true, required : true},
        firstName : {type: String, required: true},
        lastName : {type: String, required: true},
        password : {type: String, required: true},
        profilePic : {type: String, default : ""}
    },
    {
        timestamps : true
    }
)

export type UserDocument = UserValidatorResponse & Document;

const UserModel = mongoose.model<UserDocument>("User", userSchema);

export default UserModel;