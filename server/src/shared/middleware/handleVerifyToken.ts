import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

// eventually use socket to authenticate
export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : undefined;

  if (!token) {
    res.status(401).json({ error: "Authentication required" });
    return;
  }

  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    next(new Error("JWT_SECRET is not defined"));
    return;
  }

  try {
    const payload = jwt.verify(token, jwtSecret);

    if (
      typeof payload === "string" ||
      typeof payload.id !== "string" ||
      typeof payload.username !== "string"
    ) {
      res.status(401).json({ error: "Invalid token" });
      return;
    }

    req.user = {
      id: payload.id,
      username: payload.username,
    };

    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
