import { useCommentStore } from "@/features/posts/stores/comment.store.js";
import { useEffect } from "react";

const useComments = (postId) => {
  const comments = useCommentStore((state) => state.comments);
  const isLoadingComments = useCommentStore((state) => state.isLoadingComments);

  const getComments = useCommentStore((state) => state.getComments);
  const createComment = useCommentStore((state) => state.createComment);
  const deleteComment = useCommentStore((state) => state.deleteComment);

  // Likes
  const likeComment = useCommentStore((state) => state.likeComment);
  const unlikeComment = useCommentStore((state) => state.unlikeComment);
  const toggleLike = (commentId, hasLiked) => {
    if (hasLiked) {
      unlikeComment(commentId);
    } else {
      likeComment(commentId);
    }
  };

  useEffect(() => {
    getComments(postId);
  }, [postId, getComments]);

  return {
    comments,
    isLoadingComments,
    createComment,
    deleteComment,
    toggleLike,
  };
};

export { useComments };
