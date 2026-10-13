import type { Request, Response, NextFunction } from "express";
import * as postQueries from "#features/posts/post.queries.js";

const getPosts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const requester = req.user;

    if (!requester) {
      res.status(401).json({ error: "Authentication required" });
      return;
    }
    const requesterId = requester.id;

    const data = await postQueries.getPosts(requesterId);
    res.json(data);
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

    const title = req.body.title;
    const content = req.body.content;

    const post = await postQueries.createPost(requesterId, title, content);

    res.json(post);
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export { getPosts, createPost };
