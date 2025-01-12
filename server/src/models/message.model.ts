import {model, Schema, Types} from "mongoose";


const messageModel = new Schema(
    {
        senderId : {type : Types.ObjectId, ref: 'User', required : true},
        receiverId : {type: Types.ObjectId, ref: 'User', required: true},
        text: {type : String},
        image : {type : String}
    },
    {
        timestamps : true
    }
);

const MessageModel = model("Message", messageModel);

export default MessageModel;