import { prisma } from "../../db/prisma/prisma.js";
import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userQueries from "#features/users/user.queries.js";
import type { SignupBody } from "./auth.types.js";

const signup = async (
  req: Request<{}, {}, SignupBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // create the user
    const user = await userQueries.createUser(username, hashedPassword);

    res.json({
      id: user.id,
      username: user.username,
      avatar: user.avatar,
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { username, password } = req.body;

    const user = await userQueries.getUserByUsername(username);
    if (!user) return;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return;

    // token here

    res.json({
      id: user.id,
      username: user.username,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const loginGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export { signup, login, loginGuest };
