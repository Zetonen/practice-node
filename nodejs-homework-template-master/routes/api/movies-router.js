import express from "express";
import moviesControllers from "../../controllers/movies-controllers.js";
import { isEmptyBody } from "../../middlewares/index.js";

const moviesRouter = express.Router();

moviesRouter.get("/", moviesControllers.getAll);

moviesRouter.get("/:id", moviesControllers.getById);

moviesRouter.post("/", isEmptyBody, moviesControllers.add);

moviesRouter.put("/:id", isEmptyBody, moviesControllers.updateById);

moviesRouter.delete('/:id', moviesControllers.deleteById )

export default moviesRouter;
