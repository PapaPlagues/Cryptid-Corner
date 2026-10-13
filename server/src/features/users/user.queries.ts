import { prisma } from "../../db/prisma/prisma.js";
import { userSelect } from "./user.select.js";

const createUser = async (username: string, password: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        username,
        password,
      },
    });
    return user;
  } catch (error) {
    console.error;
    throw error;
  }
};

const getUserByUsername = async (username: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });
    return user;
  } catch (err) {
    console.error;
    throw err;
  }
};

const getAllUsers = async (requesterId: string) => {
  try {
    const users = await prisma.user.findMany({
      select: userSelect(requesterId),
    });

    return users;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getUserById = async (requesterId: string, userId: string) => {
  try {
    const user = await prisma.user.findMany({
      where: {
        id: userId,
      },
      select: userSelect(requesterId),
    });

    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const updateBio = async (requesterId: string, bio: string) => {
  try {
    const user = await prisma.user.update({
      data: {
        bio,
      },
      where: {
        id: requesterId,
      },
      select: userSelect(requesterId),
    });
    return user;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { createUser, getUserByUsername, getAllUsers, getUserById, updateBio };
