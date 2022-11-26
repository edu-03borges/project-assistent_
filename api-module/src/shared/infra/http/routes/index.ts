import { Router } from "express";
import { parametersRoutes } from "./parameters.routes";
import { phraseRoutes } from "./phrase.routes";
import { usersRoutes } from "./users.routes";

const routes = Router();

routes.use(phraseRoutes);
routes.use(parametersRoutes);
routes.use(usersRoutes);

export { routes };