import { mongodbUri } from "../config/config.js";
import mongoose from "mongoose";

export const connect2Db = async () => {
    try {
        await mongoose.connect(mongodbUri);
    } catch(err) {
       console.log("impossibile connettersi al database");
    }
}