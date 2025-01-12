import mongoose from "mongoose";
import { db } from "../config";

const connect = async () => {

    try {
        await mongoose.connect(db)
        console.log("DB connected Successfully");
    } catch (error) {
        console.log("Error in connecting to database", error);
    }
};

export default connect;