import express from "express";
import cors from "cors";
import movies from "./movies.js";

const app = express();

app.use(cors());

// const corsMiddleWare = cors();

// app.use(corsMiddleWare);
// app.use((req, res, next) => {
//   console.log("First middleware");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   next();
// });

app.get("/products", (req, res) => {
  res.json([]);
});

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get((req, res) => {
  res.status("404").json({
    message: "Not found",
  });
});
app.listen(3002, () => console.log("server running on 3002 PORT"));
