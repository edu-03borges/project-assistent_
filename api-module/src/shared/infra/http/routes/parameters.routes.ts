import { Router } from "express";
import { GetParametersController } from "../../../../modules/Parameters/useCases/getParameters/GetParametersController";
import { UpdateParametersController } from "../../../../modules/Parameters/useCases/updateParameters/UpdateParametersController";

import ensureAthenticated from "../middlewares/ensureAthenticated";
import ensureAdmin from "../middlewares/ensureAdmin";

const parametersRoutes = Router();

const updateParametersController = new UpdateParametersController();
const getParametersController = new GetParametersController();

parametersRoutes.get("/parameters/get", ensureAthenticated, ensureAdmin, getParametersController.handle);

parametersRoutes.patch("/parameters/update", ensureAthenticated, ensureAdmin, updateParametersController.handle);

export { parametersRoutes };