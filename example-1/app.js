import express from "express";

const app = express(); // app - web-server

app.get("/", (request, response) => {
  response.send("<h1>Home page</h1>");
});

app.get("/contact", (request, response) => {
  response.send("<h1>Contact page</h1>");
  console.log(request.url);
  console.log(request.method);
  console.log(request);
});

app.listen(3000, () => console.log("start server on 3000 PORT"));
