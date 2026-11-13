import { Router } from "express";
import { retrieveAvatar } from "#shared/middleware/multer.js";
import * as userController from "#features/users/user.controller.js";
import { authenticateToken } from "#shared/middleware/handleVerifyToken.js";

const currentRouter = Router();

currentRouter.get("/", authenticateToken, userController.getCurrentUser);
currentRouter.patch("/bio", authenticateToken, userController.patchBio);
currentRouter.patch(
  "/avatar",
  authenticateToken,
  retrieveAvatar,
  userController.patchAvatar,
);

export { currentRouter };
