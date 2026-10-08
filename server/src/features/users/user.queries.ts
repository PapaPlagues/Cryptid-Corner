import { prisma } from "../../db/prisma/prisma.js";

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

export { createUser, getUserByUsername };
