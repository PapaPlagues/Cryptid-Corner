import { prisma } from "#db/prisma/prisma.js";
import { commentsSelect } from "#features/posts/comments.select.js";
import { DatabaseError } from "#shared/errors/DatabaseError.js";

const getCommentById = async (commentId: string) => {
  try {
    const data = await prisma.comment.findFirst({
      where: { id: commentId },
    });
    return data;
  } catch (err) {
    throw new DatabaseError("Unable to retrieve comment");
  }
};

const getCommentsByPost = async (requesterId: string, postId: string) => {
  try {
    const data = await prisma.comment.findMany({
      where: { postId },
      select: commentsSelect(requesterId),
      orderBy: [{ createdAt: "asc" }, { id: "desc" }],
    });
    return data;
  } catch (err) {
    throw new DatabaseError("Unable to retrieve comment");
  }
};

const createComment = async (
  requesterId: string,
  postId: string,
  content: string,
) => {
  try {
    const data = await prisma.comment.create({
      data: {
        content,
        post: {
          connect: {
            id: postId,
          },
        },
        author: {
          connect: {
            id: requesterId,
          },
        },
      },
      select: commentsSelect(requesterId),
    });
    return data;
  } catch (err) {
    throw new DatabaseError("Unable to create comment");
  }
};

const deleteComment = async (requesterId: string, commentId: string) => {
  try {
    const data = await prisma.comment.delete({
      where: {
        id: commentId,
      },
      select: commentsSelect(requesterId),
    });
    return data;
  } catch (err) {
    throw new DatabaseError("Unable to delete comment");
  }
};

const likeComment = async (requesterId: string, commentId: string) => {
  try {
    const data = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        likers: {
          connect: {
            id: requesterId,
          },
        },
      },
      select: commentsSelect(requesterId),
    });
    return data;
  } catch (err) {
    throw new DatabaseError("Unable to like comment");
  }
};
const unlikeComment = async (requesterId: string, commentId: string) => {
  try {
    const data = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        likers: {
          disconnect: {
            id: requesterId,
          },
        },
      },
      select: commentsSelect(requesterId),
    });
    return data;
  } catch (err) {
    throw new DatabaseError("Unable to unlike comment");
  }
};

export {
  getCommentById,
  getCommentsByPost,
  createComment,
  deleteComment,
  likeComment,
  unlikeComment,
};
