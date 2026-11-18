import { useEffect } from "react";
import { usePostStore } from "@/features/posts/stores/posts.store.js";

const usePosts = (limit = 20, userId: string | null = null) => {
  const posts = usePostStore((state) => state.posts);
  const getPosts = usePostStore((state) => state.getPosts);
  const getNextPage = usePostStore((state) => state.getNextPage);

  const isLoadingInit = usePostStore((state) => state.isLoadingInit);
  const isLoadingNextPage = usePostStore((state) => state.isLoadingNextPage);

  const hasNextPage = usePostStore((state) => state.hasNextPage);

  useEffect(() => {
    getPosts(limit, userId);
  }, [getPosts, limit, userId]);

  return {
    posts,
    isLoadingInit,
    isLoadingNextPage,
    hasNextPage,
    refetch: () => getPosts(limit, userId),
    loadMore: () => getNextPage(limit, userId),
  };
};

export { usePosts };
