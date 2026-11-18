import { create } from "zustand";
import {
  fetchPosts,
  createPost as createPostRequest,
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

type PostState = {
  posts: Post[];
  hasNextPage: boolean;
  endCursor: string | null;
  isLoadingInit: boolean;
  isLoadingNextPage: boolean;
  isCreatingPost: boolean;

  getPosts: (limit?: number, userId?: string | null) => Promise<void>;
  getNextPage: (limit?: number, userId?: string | null) => Promise<void>;
  createPost: (postData: CreatePostData) => Promise<void>;
};

const usePostStore = create<PostState>((set, get) => ({
  posts: [],
  hasNextPage: false,
  endCursor: null,
  isLoadingInit: false,
  isLoadingNextPage: false,
  isCreatingPost: false,

  getPosts: async (limit = 20, userId = null) => {
    set({ isLoadingInit: true });

    try {
      const data: PostsResponse = await fetchPosts(null, limit, userId);
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

    try {
      const data: PostsResponse = await fetchPosts(endCursor, limit, userId);

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
}));

export { usePostStore };
