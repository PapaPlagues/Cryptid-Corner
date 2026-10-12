import type { Request, Response, NextFunction } from "express";
import * as userQueries from "#features/users/user.queries.js";

const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requester = req.user;

    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const requesterId = requester.id;

    const users = await userQueries.getAllUsers(requesterId);

    res.json({ users: users });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getUser = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const requester = req.user;

    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }

    const requesterId = requester.id;

    const { userId } = req.params;

    if (!userId) {
      res.status(400).json({ error: "User ID is required" });
      return;
    }

    const user = await userQueries.getUserById(requesterId, userId);

    res.json(user);
  } catch (err) {
    next(err);
  }
};

export { getAllUsers, getUser };
