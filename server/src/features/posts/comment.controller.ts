import type { Request, Response, NextFunction } from "express";
import { formatCommentData } from "#features/posts/comments.service.js";
import * as commentQueries from "#features/posts/comment.queries.js";
import { DatabaseError } from "#shared/errors/DatabaseError.js";
import { validateInput } from "#shared/middleware/validations.js";
import { AuthenticationError } from "#shared/errors/AuthenticationError.js";
import { ValidationError } from "#shared/errors/ValidationErrors.js";

const getComments = async (
  req: Request<{ postId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    validateInput(req);
    const requester = req.user;
    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const userId = requester.id;
    const { postId } = req.params;
    const comments = await commentQueries.getCommentsByPost(userId, postId);
    const formattedComments = comments.map((comment) =>
      formatCommentData(comment),
    );
    res.json({ comments: formattedComments });
  } catch (err) {
    next(err);
  }
};

const createComment = async (
  req: Request<{ postId: string }, {}, { content: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    validateInput(req);
    const requester = req.user;
    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const userId = requester.id;
    const { postId } = req.params;
    const content: unknown = req.body.content;
    if (typeof content !== "string") {
      throw new ValidationError([{ msg: "Content must be a string" }]);
    }
    const comment = await commentQueries.createComment(userId, postId, content);
    const formattedComment = formatCommentData(comment);
    res.json(formattedComment);
  } catch (err) {
    next(err);
  }
};

const deleteComment = async (
  req: Request<{ commentId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    validateInput(req);
    const requester = req.user;
    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const userId = requester.id;
    const { commentId } = req.params;

    const comment = await commentQueries.getCommentById(commentId);
    if (!comment) throw new DatabaseError("Unable to delete comment", 404);
    if (comment.authorId != userId) {
      throw new AuthenticationError("Unable to delete comment", 404);
    }

    const deletedComment = await commentQueries.deleteComment(
      userId,
      commentId,
    );
    const formattedComment = formatCommentData(deletedComment);
    res.json(formattedComment);
  } catch (err) {
    next(err);
  }
};

const likeComment = async (
  req: Request<{ commentId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    validateInput(req);
    const requester = req.user;
    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const userId = requester.id;
    const { commentId } = req.params;
    const comment = await commentQueries.likeComment(userId, commentId);
    const formattedComment = formatCommentData(comment);
    res.json(formattedComment);
  } catch (err) {
    next(err);
  }
};

const unlikeComment = async (
  req: Request<{ commentId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    validateInput(req);
    const requester = req.user;
    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const userId = requester.id;
    const { commentId } = req.params;
    const comment = await commentQueries.unlikeComment(userId, commentId);
    const formattedComment = formatCommentData(comment);
    res.json(formattedComment);
  } catch (err) {
    next(err);
  }
};

export {
  getComments,
  createComment,
  deleteComment,
  likeComment,
  unlikeComment,
};
