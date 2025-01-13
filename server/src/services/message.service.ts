import cloudinary from "../lib/cloudinary";
import { getReceiverSocketId, io } from "../lib/socket";
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

        const res =  await message.save();

        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverId) {
            io.to(receiverSocketId).emit("newMessage", message);
        }

        return res;
    }
}