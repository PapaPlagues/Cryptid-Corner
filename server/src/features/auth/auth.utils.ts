import jwt from "jsonwebtoken";
import type { User } from "../../db/generated/prisma/client.js";
import type { Response } from "express";

export const createToken = (user: User) => {
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }

  const options = { expiresIn: 60 * 60 * 24 }; // 24 hours

  return jwt.sign({ id: user.id, username: user.username }, jwtSecret, options);
};

export const setAuthCookie = (res: Response, token: string) => {
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000,
  });
};
