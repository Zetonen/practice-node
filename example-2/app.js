import express from "express";
import movies from "./movies.js";

const app = express();

app.get("/movies", (request, response) => {
  response.json(movies);
  //   response.send(movies);
});

app.listen(3001, () => console.log("server running on 3001 PORT"));
