import { useEffect } from "react";
import { usePostStore } from "@/features/posts/stores/posts.store.js";

const usePosts = () => {
  const posts = usePostStore((state) => state.posts);
  const getPosts = usePostStore((state) => state.getPosts);
  const isLoadingPosts = usePostStore((state) => state.isLoadingPosts);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return { posts, isLoadingPosts, refetch: getPosts };
};

export { usePosts };
