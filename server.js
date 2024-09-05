import express from "express";
import cors from "cors";
import logger from "morgan";
import helmet from "helmet";
import { port } from "./config/config.js";
import { connect2Db } from "./database/dbConnection.js";
import mongoose from "mongoose";

// Instantiate express app
const app = express();

// Middlewares
app.use(cors());
app.use(helmet());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connects to DB
connect2Db();

// GET route
app.get("/", (req, res) => {
    res.send("<h1>Ciao, sono Arturo, il server che ce l'ha duro!</h1>");
});

mongoose.connection.once("open", () => {
    console.log("Connessione col DB stabilita con successo");
    
    app.listen(port, () => {
        console.log(`Server in ascolto sulla porta ${port}.\nCTRL+C per terminare.`);
    });
});
