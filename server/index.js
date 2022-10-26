import express from "express";
import db from "./database/db.js";
import cors from 'cors';
import todoRoutes from "./routes/todoRoutes.js";

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use('/todo/', todoRoutes);

db.connect();

const PORT = 4000 | process.env.PORT;

app.listen(PORT, () => { console.log("Server started at port", PORT) })