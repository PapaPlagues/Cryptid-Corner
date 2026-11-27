import type { Request, Response, NextFunction } from "express";
import * as postQueries from "#features/posts/post.queries.js";
import * as userQueries from "#features/users/user.queries.js";
import { formatPostData } from "#features/posts/post.service.js";
import { AuthenticationError } from "#shared/errors/AuthenticationError.js";
import { DatabaseError } from "#shared/errors/DatabaseError.js";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requester = req.user;

    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const requesterId = requester.id;
    const authorId = req.query.userId || req.params.userId;
    const cursor = req.query.cursor ? req.query.cursor : null;
    const limit = req.query.limit ? req.query.limit : 20;
    const data = await postQueries.getPosts(
      requesterId,
      authorId,
      cursor,
      Number(limit),
    );
    const posts = data.posts.map((post) => formatPostData(post));
    res.json({ ...data, posts });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const getFollowingPosts = async (
  req: Request,
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
    const following = await userQueries.getFollowing(requesterId, requesterId);
    const followingIds = following.map((user) => user.id);

    const cursor = req.query.cursor ? req.query.cursor : null;
    const limit = req.query.limit ? req.query.limit : 20;
    const data = await postQueries.getPosts(
      requesterId,
      [requesterId, ...followingIds],
      cursor,
      Number(limit),
    );
    const posts = data.posts.map((post) => formatPostData(post));
    res.json({ ...data, posts });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const createPost = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requester = req.user;

    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }

    const requesterId = requester.id;
    const content = req.body.content;
    const post = await postQueries.createPost(requesterId, content);

    // adds url to post
    const formattedPost = formatPostData(post);
    res.json(formattedPost);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

const likePost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { postId } = req.params;
    const post = await postQueries.likePost(userId, postId);
    const formattedPost = formatPostData(post);
    res.json(formattedPost);
  } catch (err) {
    console.error(err);
  }
};

const unlikePost = async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { postId } = req.params;
    const post = await postQueries.unlikePost(userId, postId);
    const formattedPost = formatPostData(post);
    res.json(formattedPost);
  } catch (err) {
    console.error(err);
  }
};

const deletePost = async (
  req: Request<{ postId: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const requester = req.user;
    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }

    const userId = requester.id;
    const { postId } = req.params;

    const post = await postQueries.getPostById(userId, postId);
    if (!post) throw new DatabaseError("Unable to delete post", 404);
    if (post.authorId !== userId) {
      throw new AuthenticationError("Unable to delete post", 404);
    }

    // Delete media on supabase (if present)

    // Delete post on DB
    const deletedPost = await postQueries.deletePost(userId, postId);
    if (!deletedPost) throw new DatabaseError("Unable to delete post");
    const formattedPost = formatPostData(deletedPost);
    res.json(formattedPost);
  } catch (err) {
    next(err);
  }
};

export {
  getPosts,
  getFollowingPosts,
  createPost,
  likePost,
  unlikePost,
  deletePost,
};
