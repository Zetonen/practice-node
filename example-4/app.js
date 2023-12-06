import express from "express";
import cors from "cors";

import moviesRouter from "./routes/api/movies-router.js";
const app = express();

app.use(cors());

app.use("/api/movies", moviesRouter); //будь який метод. шукати буде початок адреси /api/movies в moviesRouter

app.listen(3003, () => console.log("server running on 3003 PORT"));
