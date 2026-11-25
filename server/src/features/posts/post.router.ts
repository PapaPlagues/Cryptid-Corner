import { Router } from "express";
import * as postController from "#features/posts/post.controller.js";
import * as commentController from "#features/posts/comment.controller.js";
import { authenticateToken } from "#shared/middleware/handleVerifyToken.js";

const postRouter = Router();

postRouter.get("/", authenticateToken, postController.getPosts);
postRouter.post("/", authenticateToken, postController.createPost);
postRouter.delete("/:postId", authenticateToken, postController.deletePost);
postRouter.get("/feed", authenticateToken, postController.getFollowingPosts);

// Likes
postRouter.post("/:postId/likes", authenticateToken, postController.likePost);
postRouter.delete(
  "/:postId/likes",
  authenticateToken,
  postController.unlikePost,
);

// Comments
postRouter.get(
  "/:postId/comments",
  authenticateToken,
  commentController.getComments,
);

postRouter.post("/:postId/comments", authenticateToken, commentController.createComment);

export { postRouter };
