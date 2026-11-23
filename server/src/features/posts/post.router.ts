import { Router } from "express";
import * as postController from "#features/posts/post.controller.js";
import { authenticateToken } from "#shared/middleware/handleVerifyToken.js";

const postRouter = Router();

postRouter.get("/", authenticateToken, postController.getPosts);
postRouter.post("/", authenticateToken, postController.createPost);
postRouter.delete("/:postId", authenticateToken, postController.deletePost);

// get feed

// Likes
postRouter.post("/:postId/likes", authenticateToken, postController.likePost);
postRouter.delete(
  "/:postId/likes",
  authenticateToken,
  postController.unlikePost,
);

// get comments

// create comment

export { postRouter };
