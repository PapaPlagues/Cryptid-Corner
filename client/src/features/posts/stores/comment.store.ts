import { create } from "zustand";
import {
  fetchComments,
  createComment as createCommentRequest,
  deleteComment as deleteCommentRequest,
  createCommentLike as createCommentLikeRequest,
  deleteCommentLike as deleteCommentLikeRequest,
} from "@/features/posts/api/posts.api.js";
import type { Comment } from "@/shared/types/comment.types.js";

type CommentsResponse = {
  comments: Comment[];
};

type CommentState = {
  comments: Comment[];
  commentsPostId: string | null;

  isLoadingComments: boolean;
  isCreatingComment: boolean;
  isDeletingComment: boolean;
  isLoadingCommentLike: boolean;

  getComments: (postId: string) => Promise<void>;
  createComment: (postId: string, content: string) => Promise<void>;
  deleteComment: (commentId: string) => Promise<void>;
  likeComment: (commentId: string) => Promise<void>;
  unlikeComment: (commentId: string) => Promise<void>;
};

const useCommentStore = create<CommentState>((set, get) => ({
  comments: [],
  commentsPostId: null,

  isLoadingComments: false,
  isCreatingComment: false,
  isDeletingComment: false,
  isLoadingCommentLike: false,

  getComments: async (postId) => {
    set({
      isLoadingComments: true,
      commentsPostId: postId,
      comments: [],
    });

    try {
      const data: CommentsResponse = await fetchComments(postId);

      // Prevent an older request from replacing comments
      // if the user has switched to another post.
      if (get().commentsPostId !== postId) return;

      set({ comments: data.comments });
    } catch (err) {
      console.error(err);
    } finally {
      if (get().commentsPostId === postId) {
        set({ isLoadingComments: false });
      }
    }
  },

  createComment: async (postId, content) => {
    set({ isCreatingComment: true });

    try {
      const data = await createCommentRequest(postId, content);

      set((state) => ({
        comments:
          state.commentsPostId === postId
            ? [...state.comments, data]
            : state.comments,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isCreatingComment: false });
    }
  },

  deleteComment: async (commentId) => {
    set({ isDeletingComment: true });

    try {
      await deleteCommentRequest(commentId);

      set((state) => ({
        comments: state.comments.filter((comment) => comment.id !== commentId),
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isDeletingComment: false });
    }
  },

  likeComment: async (commentId) => {
    set({ isLoadingCommentLike: true });

    try {
      const data = await createCommentLikeRequest(commentId);

      set((state) => ({
        comments: state.comments.map((comment) =>
          comment.id === commentId ? data : comment,
        ),
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingCommentLike: false });
    }
  },

  unlikeComment: async (commentId) => {
    set({ isLoadingCommentLike: true });

    try {
      const data = await deleteCommentLikeRequest(commentId);

      set((state) => ({
        comments: state.comments.map((comment) =>
          comment.id === commentId ? data : comment,
        ),
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingCommentLike: false });
    }
  },
}));

export { useCommentStore };
