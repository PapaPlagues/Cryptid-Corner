import { prisma } from "#db/prisma/prisma.js";
import { postSelect } from "#features/posts/post.select.js";

const getPosts = async (requesterId: string) => {
  try {
    const posts = await prisma.post.findMany({
      select: postSelect(requesterId),
    });

    return posts;
  } catch (err) {
    console.error;
    throw err;
  }
};

const createPost = async (
  requesterId: string,
  title: string,
  content: string,
  media = null,
) => {
  try {
    const data = await prisma.post.create({
      data: {
        title,
        content,
        media,
        author: {
          connect: {
            id: requesterId,
          },
        },
      },
      select: postSelect(requesterId),
    });
    return data;
  } catch (err) {
    console.error;
    throw err;
  }
};

export { getPosts, createPost };
