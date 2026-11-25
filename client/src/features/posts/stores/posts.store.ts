import { create } from "zustand";
import {
  fetchPosts,
  createPost as createPostRequest,
  deletePost as deletePostRequest,
  createPostLike as createPostLikeRequest,
  deletePostLike as deletePostLikeRequest,
  fetchComments,
  createComment,
  createCommentLike,
  deleteCommentLike,
  deleteComment,
  fetchPostsFeed,
} from "@/features/posts/api/posts.api.js";
import type { Post } from "@/shared/types/post.types.js";
import type { CreatePostData } from "../api/posts.api";

type PostsResponse = {
  posts: Post[];
  meta: {
    hasNextPage: boolean;
    endCursor: string | null;
  };
};

type FeedType = "all" | "following";

type PostState = {
  posts: Post[];
  hasNextPage: boolean;
  endCursor: string | null;
  isLoadingInit: boolean;
  isLoadingNextPage: boolean;
  isCreatingPost: boolean;
  isDeletingPost: boolean;
  isLoadingLike: boolean;
  feedType: FeedType;

  getPosts: (limit?: number, userId?: string | null) => Promise<void>;
  getNextPage: (limit?: number, userId?: string | null) => Promise<void>;
  createPost: (postData: CreatePostData) => Promise<void>;
  deletePost: (postId: string) => Promise<void>;
  likePost: (postId: string) => Promise<void>;
  unlikePost: (postId: string) => Promise<void>;
  setFeedType: (feedType: FeedType) => void;
};

const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  hasNextPage: false,
  endCursor: null,
  isLoadingInit: false,
  isLoadingNextPage: false,
  isCreatingPost: false,
  isDeletingPost: false,
  isLoadingLike: false,
  feedType: "all",

  fetchData: (signal, cursor, limit, userId = null) => {
    if (userId) {
      return fetchPosts(signal, cursor, limit, userId);
    }
    const { feedType } = get();

    if (feedType === "following") {
      return fetchPostsFeed(signal, cursor, limit);
    }

    return fetchPosts(signal, cursor, limit);
  },

  getPosts: async (limit = 20, userId = null) => {
    set({ isLoadingInit: true });
    const { fetchData } = get();

    try {
      const data: PostsResponse = await fetchData(null, null, limit, userId);
      set({
        posts: data.posts,
        hasNextPage: data.meta.hasNextPage,
        endCursor: data.meta.endCursor,
      });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingInit: false });
    }
  },

  getNextPage: async (limit = 20, userId = null) => {
    const { endCursor, hasNextPage, isLoadingNextPage } = get();
    if (!hasNextPage || !endCursor || isLoadingNextPage) return;
    set({ isLoadingNextPage: true });
    const { fetchData } = get();
    try {
      const data: PostsResponse = await fetchData(
        null,
        endCursor,
        limit,
        userId,
      );

      set((state) => ({
        posts: [...state.posts, ...data.posts],
        hasNextPage: data.meta.hasNextPage,
        endCursor: data.meta.endCursor,
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingNextPage: false });
    }
  },

  // use FormData when adding images
  createPost: async (postData) => {
    set({ isCreatingPost: true });

    try {
      const post = await createPostRequest(postData);

      set((state) => ({
        posts: [post, ...state.posts],
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isCreatingPost: false });
    }
  },

  deletePost: async (postId) => {
    set({ isDeletingPost: true });

    try {
      await deletePostRequest(postId);

      set((state) => ({
        posts: state.posts.filter((post) => post.id !== postId),
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isDeletingPost: false });
    }
  },

  likePost: async (postId) => {
    set({ isLoadingLike: true });

    try {
      const updatedPost = await createPostLikeRequest(postId);

      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId ? updatedPost : post,
        ),
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingLike: false });
    }
  },

  unlikePost: async (postId) => {
    set({ isLoadingLike: true });

    try {
      const updatedPost = await deletePostLikeRequest(postId);

      set((state) => ({
        posts: state.posts.map((post) =>
          post.id === postId ? updatedPost : post,
        ),
      }));
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingLike: false });
    }
  },

  setFeedType: (feedType) => {
    set({ feedType });
  },
}));

export { usePostStore };
