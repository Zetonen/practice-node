import express from "express";
import logger from "morgan";
import cors from "cors";
import "dotenv/config";

// import dotenv from "dotenv";
import moviesRouter from "./routes/api/movies-router.js";

// dotenv.config();// дивиться чи є .env/ читає його построково та додає у process.env

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger)); //?
app.use(cors()); //??
app.use(express.json()); // якщо заголовок content-type json тоді express.json проганяє бінарні дані json.parse та додає у req.body/ якщо інший тип тоді пропускає далі

app.use("/api/movies", moviesRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({
    message,
  });
});

export default app;
