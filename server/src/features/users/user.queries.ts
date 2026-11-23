import { prisma } from "#db/prisma/prisma.js";
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
    const user = await prisma.user.findUnique({
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

const updateAvatar = async (requesterId: string, avatarSrc: string) => {
  try {
    const user = await prisma.user.update({
      data: {
        avatar: avatarSrc,
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

const getFollowing = async (requesterId: string, userId: string) => {
  try {
    const data = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        following: {
          select: userSelect(requesterId),
        },
      },
    });
    return data?.following;
  } catch (err) {
    console.error(err);
  }
};

const getFollowers = async (requesterId: string, userId: string) => {
  try {
    const data = await prisma.user.findFirst({
      where: {
        id: userId,
      },
      select: {
        followers: {
          select: userSelect(requesterId),
        },
      },
    });
    return data?.followers;
  } catch (err) {
    console.error(err);
  }
};

const followUser = async (requesterId: string, followingId: string) => {
  try {
    await prisma.user.update({
      data: {
        following: {
          connect: {
            id: followingId,
          },
        },
      },
      where: {
        id: requesterId,
      },
    });
    const data = await prisma.user.findUnique({
      where: {
        id: followingId,
      },
      select: userSelect(requesterId),
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

const unfollowUser = async (requesterId: string, followingId: string) => {
  try {
    await prisma.user.update({
      data: {
        following: {
          disconnect: {
            id: followingId,
          },
        },
      },
      where: {
        id: requesterId,
      },
    });
    const data = await prisma.user.findUnique({
      where: {
        id: followingId,
      },
      select: userSelect(requesterId),
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export {
  createUser,
  getUserByUsername,
  getAllUsers,
  getUserById,
  updateBio,
  updateAvatar,
  getFollowing,
  getFollowers,
  followUser,
  unfollowUser,
};
