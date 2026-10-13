import { Router } from "express";
import * as postController from "#features/posts/post.controller.js";
import { authenticateToken } from "#shared/middleware/handleVerifyToken.js";

const postRouter = Router();

postRouter.get("/", authenticateToken, postController.getPosts);

postRouter.post("/", authenticateToken, postController.createPost);

// delete

// get feed

// likes

// like delete (unlike)

// get comments

// create comment

export { postRouter };
