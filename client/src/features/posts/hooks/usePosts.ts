import { useEffect } from "react";
import { usePostStore } from "@/features/posts/stores/posts.store.js";

const usePosts = (limit = 20, userId: string | null = null) => {
  const posts = usePostStore((state) => state.posts);
  const getPosts = usePostStore((state) => state.getPosts);
  const getNextPage = usePostStore((state) => state.getNextPage);

  const deletePost = usePostStore((state) => state.deletePost);
  const setFeedType = usePostStore((state) => state.setFeedType);

  // Likes
  const likePost = usePostStore((state) => state.likePost);
  const unlikePost = usePostStore((state) => state.unlikePost);

  const isLoadingInit = usePostStore((state) => state.isLoadingInit);
  const isLoadingNextPage = usePostStore((state) => state.isLoadingNextPage);
  const isDeletingPost = usePostStore((state) => state.isDeletingPost);
  const isLoadingLike = usePostStore((state) => state.isLoadingLike);
  const feedType = usePostStore((state) => state.feedType);

  const hasNextPage = usePostStore((state) => state.hasNextPage);

  const toggleLike = (postId, hasLiked) => {
    if (hasLiked) {
      unlikePost(postId);
    } else {
      likePost(postId);
    }
  };

  useEffect(() => {
    getPosts(limit, userId);
  }, [getPosts, limit, userId]);

  return {
    posts,
    isLoadingInit,
    isLoadingNextPage,
    isDeletingPost,
    isLoadingLike,
    feedType,
    hasNextPage,
    deletePost,
    setFeedType,
    toggleLike,
    refetchPosts: () => getPosts(limit, userId),
    loadMore: () => getNextPage(limit, userId),
  };
};

export { usePosts };
