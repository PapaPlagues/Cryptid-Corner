import { prisma } from "../../db/prisma/prisma.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import * as userQueries from "#features/users/user.queries.js";

const signup = async (req, res, next) => {
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

const login = async (req, res, next) => {};

const loginGuest = async (req, res, next) => {};

export { signup, login, loginGuest };
