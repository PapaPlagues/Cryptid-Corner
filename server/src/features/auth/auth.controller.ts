import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import * as userQueries from "#features/users/user.queries.js";
import type { SignupBody, LoginBody } from "./auth.types.js";
import { createToken, setAuthCookie } from "./auth.utils.js";

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
      bio: user.bio,
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
      throw new Error("Invalid username or password");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error("Invalid username or password");
    }

    const token = createToken(user);
    setAuthCookie(res, token);

    res.json({
      id: user.id,
      username: user.username,
      bio: user.bio,
      avatar: user.avatar,
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
    setAuthCookie(res, token);

    res.json({
      id: guest.id,
      username: guest.username,
      bio: guest.bio,
      avatar: guest.avatar,
    });
  } catch (err) {
    console.error(err);
    next(err);
  }
};

const logout = (req: Request, res: Response) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
  });

  res.json({ message: "Logged out successfully. " });
};

export { signup, login, loginGuest, logout };
