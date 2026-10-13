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

const getCurrentUser = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    if (!req.user) {
      res.status(400).json({ error: "User is required" });
      return;
    }

    const user = await userQueries.getUserById(req.user.id, req.user.id);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

const patchBio = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction,
) => {
  if (!req.user) {
    res.status(401).json({ error: "User is required " });
    return;
  }
  try {
    const userId = req.user.id;
    const bio = req.body.bio;

    const updatedUser = await userQueries.updateBio(userId, bio);
    res.json(updatedUser);
  } catch (err) {
    next(err);
  }
};

const patchAvatar = async (
  req: Request<{ userId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
  } catch (err) {
    next(err);
  }
};

export { getAllUsers, getUser, getCurrentUser, patchBio, patchAvatar };
