import { Schema, model } from "mongoose";
// Schema - опис що буде зберігатись в базі

const movieSchema = new Schema({
  title: String,
  director: String,
});

const Movie = model("movie", movieSchema); //створи модель Movie яка під'єднана до колекції movies( спецільно в однині) та буде працювати по схемі
// category => categories
// mouse => mice

export default Movie;
