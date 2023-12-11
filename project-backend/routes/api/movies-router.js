import express from "express";
import moviesControllers from "../../controllers/movies-controllers.js";
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import { validaterBody } from "../../decorators/index.js";
import { movieAddSchema, movieFavoriteSchema, movieUpdateSchema } from "../../models/Movie.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", isValidId, moviesControllers.getById);

moviesRouter.post(
  "/",
  isEmptyBody,
  validaterBody(movieAddSchema),
  moviesControllers.add
);

moviesRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validaterBody(movieUpdateSchema),
  moviesControllers.updateById
);

moviesRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validaterBody(movieFavoriteSchema),
  moviesControllers.updateById
);

moviesRouter.delete("/:id", isValidId, moviesControllers.deleteById);

export default moviesRouter;
