import express from "express";
import moviesControllers from "../../controllers/movies-controllers.js";
import { isEmptyBody, isValidId } from "../../middlewares/index.js";
import { validateBody } from "../../decorators/index.js";
import { movieAddSchema, movieFavoriteSchema, movieUpdateSchema } from "../../models/Movie.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", isValidId, moviesControllers.getById);

moviesRouter.post(
  "/",
  isEmptyBody,
  validateBody(movieAddSchema),
  moviesControllers.add
);

moviesRouter.put(
  "/:id",
  isValidId,
  isEmptyBody,
  validateBody(movieUpdateSchema),
  moviesControllers.updateById
);

moviesRouter.patch(
  "/:id/favorite",
  isValidId,
  isEmptyBody,
  validateBody(movieFavoriteSchema),
  moviesControllers.updateById
);

moviesRouter.delete("/:id", isValidId, moviesControllers.deleteById);

export default moviesRouter;
