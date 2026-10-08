import express from "express";
import cors from "cors";
import { authRouter } from "../features/auth/auth.router.js";

const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/auth", authRouter);

export default app;
