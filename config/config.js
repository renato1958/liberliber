import dotenv from "dotenv";
dotenv.config();

export const port = process.env.PORT || 3000;
export const mongodbUri = process.env.MONGODB_URI;
