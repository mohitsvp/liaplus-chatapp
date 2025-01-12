import cloudinary from "../lib/cloudinary";
import UserModel from "../models/user.model";



export class UserService {

    async updateProfile(profilePic : string, userId : string) {
        const uploadResponse = await cloudinary.uploader.upload(profilePic);
        const updatedUser = await UserModel.findByIdAndUpdate(userId, {profilePic : uploadResponse.secure_url}, {new: true})
        return updatedUser
    }

    async getContacts(loggedInUserId : string) {
        const filteredUsers = await UserModel.find({_id : {$ne : loggedInUserId}}).select("-password");
        return filteredUsers
    }

}