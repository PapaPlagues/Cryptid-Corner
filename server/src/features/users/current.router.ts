import { Router } from "express";
import * as userController from "#features/users/user.controller.js";
import { authenticateToken } from "#shared/middleware/handleVerifyToken.js";

const currentRouter = Router();

currentRouter.get("/", authenticateToken, userController.getCurrentUser);

// patch bio
// patch avatar

export { currentRouter };
