import { prisma } from "../../db/prisma/prisma.js";
import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userQueries from "#features/users/user.queries.js";
import type { SignupBody, LoginBody } from "./auth.types.js";
import { createToken } from "./auth.utils.js";

const signup = async (
  req: Request<{}, {}, SignupBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

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

const login = async (
  req: Request<{}, {}, LoginBody>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { username, password } = req.body;

    const user = await userQueries.getUserByUsername(username);
    if (!user) {
      throw new Error("no user");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("not matching");
    }

    const token = createToken(user);

    res.json({
      id: user.id,
      username: user.username,
      token,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const loginGuest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const guestUsername = process.env.GUEST_USERNAME;
    if (!guestUsername) {
      throw new Error("GUEST_USERNAME is not defined");
    }

    const guest = await userQueries.getUserByUsername(guestUsername);
    if (!guest) throw new Error();

    const token = createToken(guest);

    res.json({
      id: guest.id,
      username: guest.username,
      token,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

export { signup, login, loginGuest };
