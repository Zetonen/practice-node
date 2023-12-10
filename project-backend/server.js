import mongoose from "mongoose";
import app from "./app.js";
// DMQonYVvL5v7Y8eQ

const { DB_HOST, PORT } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Success");
    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1); // припиняє усі запущені процеси
  });
