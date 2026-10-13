import express from "express";
import cors from "cors";
import { authRouter } from "../features/auth/auth.router.js";
import { userRouter } from "../features/users/user.router.js";
import { currentRouter } from "#features/users/current.router.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRouter);
app.use("/api/current", currentRouter);
app.use("/api/users", userRouter);

export default app;
