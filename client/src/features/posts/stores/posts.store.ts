import { create } from "zustand";
import {
  fetchPosts,
  createPost as createPostRequest,
} from "@/features/posts/api/posts.api.js";
import type { Post } from "@/shared/types/post.types.js";
import type { CreatePostData } from "../api/posts.api";

type PostState = {
  posts: Post[];
  isLoadingPosts: boolean;
  isCreatingPost: boolean;
  getPosts: () => Promise<void>;
  createPost: (postData: CreatePostData) => Promise<void>;
};

const usePostStore = create<PostState>((set) => ({
  posts: [],
  isLoadingPosts: false,
  isCreatingPost: false,

  getPosts: async () => {
    set({ isLoadingPosts: true });

    try {
      const posts = await fetchPosts();
      set({ posts });
    } catch (err) {
      console.error(err);
    } finally {
      set({ isLoadingPosts: false });
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
