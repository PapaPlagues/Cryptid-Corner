import { Router } from "express";
import * as userController from "#features/users/user.controller.js";
import { authenticateToken } from "../../shared/middleware/handleVerifyToken.js";

const userRouter = Router();

userRouter.get("/", authenticateToken, userController.getAllUsers);
userRouter.get("/:userId", authenticateToken, userController.getUser);

// following

// posts

export { userRouter };
