import { Router } from "express";
import { AuthenticatedUserController } from "../../../../modules/Accounts/useCases/authenticatedUser/AuthenticatedUserController";

const usersRoutes = Router();

const authenticatedUserController = new AuthenticatedUserController();

usersRoutes.post("/user/login", authenticatedUserController.handle);

export { usersRoutes };