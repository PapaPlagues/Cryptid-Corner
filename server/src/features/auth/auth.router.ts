import { Router } from "express";
import * as authController from "#features/auth/auth.controller.js";

const authRouter = Router();

authRouter.post("/signup", authController.signup);
authRouter.post("/login", authController.login);
authRouter.post("/guest-login", authController.loginGuest);

export { authRouter };
