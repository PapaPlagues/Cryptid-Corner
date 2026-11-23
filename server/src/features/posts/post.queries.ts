import { prisma } from "#db/prisma/prisma.js";
import { postSelect } from "#features/posts/post.select.js";

const getPostById = async (requesterId: string, postId: string) => {
  try {
    const data = await prisma.post.findUnique({
      where: {
        id: postId,
      },
      select: postSelect(requesterId),
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};

const getPosts = async (
  requesterId: string,
  authorIds: string | string[] | null = null,
  cursor: string | null = null,
  limit: number = 20,
) => {
  try {
    const data = await prisma.post.findMany({
      ...(authorIds && {
        where: {
          authorId: {
            in: Array.isArray(authorIds) ? authorIds : [authorIds],
          },
        },
      }),
      orderBy: [{ createdAt: "desc" }, { id: "desc" }],
      take: limit + 1,
      ...(cursor && {
        cursor: { id: cursor },
        skip: 1,
      }),
      select: postSelect(requesterId),
    });
    // if data has limit + 1 items, then a next page exists
    const hasNextPage = data.length > limit;
    const posts = hasNextPage ? data.slice(0, -1) : data;

    const meta = {
      hasNextPage,
      endCursor: posts[posts.length - 1]?.id ?? null,
    };

    return {
      posts,
      meta,
    };
  } catch (err) {
    console.error;
    throw err;
  }
};

const createPost = async (
  requesterId: string,
  content: string,
  media = null,
) => {
  try {
    const data = await prisma.post.create({
      data: {
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

const likePost = async (requesterId: string, postId: string) => {
  try {
    const data = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likers: {
          connect: {
            id: requesterId,
          },
        },
      },
      select: postSelect(requesterId),
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

const unlikePost = async (requesterId: string, postId: string) => {
  try {
    const data = await prisma.post.update({
      where: {
        id: postId,
      },
      data: {
        likers: {
          disconnect: {
            id: requesterId,
          },
        },
      },
      select: postSelect(requesterId),
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};

const deletePost = async (requesterId: string, postId: string) => {
  try {
    const data = await prisma.post.delete({
      where: {
        id: postId,
      },
      select: postSelect(requesterId),
    });
    return data;
  } catch (err) {
    console.error(err);
  }
};
export { getPostById, getPosts, createPost, likePost, unlikePost, deletePost };
