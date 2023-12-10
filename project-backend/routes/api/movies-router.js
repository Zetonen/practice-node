import express from "express";
import moviesControllers from "../../controllers/movies-controllers.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validaterBody } from "../../decorators/index.js";
import {
  movieAddSchema,
  movieUpdateSchema,
} from "../../schema/movies-schema.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

// moviesRouter.get("/:id", moviesControllers.getById);

// moviesRouter.post(
//   "/",
//   isEmptyBody,
//   validaterBody(movieAddSchema),
//   moviesControllers.add
// );

// moviesRouter.put(
//   "/:id",
//   isEmptyBody,
//   validaterBody(movieUpdateSchema),
//   moviesControllers.updateById
// );

// moviesRouter.delete("/:id", moviesControllers.deleteById);

export default moviesRouter;
