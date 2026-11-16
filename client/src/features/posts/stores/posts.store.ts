import { create } from "zustand";
import { fetchPosts } from "@/features/posts/api/posts.api.js";
import type { Post } from "@/shared/types/post.types.js";

type PostState = {
  posts: Post[];
  isLoadingPosts: boolean;
  getPosts: () => Promise<void>;
};

const usePostStore = create<PostState>((set) => ({
  posts: [],
  isLoadingPosts: false,

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
}));

export { usePostStore };
