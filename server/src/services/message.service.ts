import cloudinary from "../lib/cloudinary";
import MessageModel from "../models/message.model";



export class MessageService {


    async getFriendMessages(senderId : string, receiverId: string) {
        const messages = await MessageModel.find({$or : [{senderId, receiverId}, {senderId : receiverId, receiverId : senderId}]})

        return messages;
    }

    async sendMessage(senderId : string, receiverId: string, text? : string, image? : string) {
        let imgUrl: string = "";
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imgUrl = uploadResponse.secure_url;
        }

        const message = new MessageModel({
            senderId,
            receiverId,
            text,
            image : imgUrl
        })

        return await message.save();
    }
}