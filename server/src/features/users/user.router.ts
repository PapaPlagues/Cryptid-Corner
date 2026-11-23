import { Router } from "express";
import * as userController from "#features/users/user.controller.js";
import * as postController from "#features/posts/post.controller.js";
import { authenticateToken } from "#shared/middleware/handleVerifyToken.js";

const userRouter = Router();

userRouter.get("/", authenticateToken, userController.getAllUsers);
userRouter.get("/:userId", authenticateToken, userController.getUser);

// following
userRouter.get(
  "/:userId/following",
  authenticateToken,
  userController.getFollowing,
);
userRouter.get(
  "/:userId/followers",
  authenticateToken,
  userController.getFollowers,
);
userRouter.post(
  "/:userId/following",
  authenticateToken,
  userController.followUser,
);
userRouter.delete(
  "/:userId/following",
  authenticateToken,
  userController.unfollowUser,
);

// posts
userRouter.get("/:userId/posts", authenticateToken, postController.getPosts);

export { userRouter };
