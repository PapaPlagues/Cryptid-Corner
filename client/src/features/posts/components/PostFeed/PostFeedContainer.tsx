import { PostFeedView } from "@/features/posts/components/PostFeed/PostFeedView.js";
import { usePosts } from "@/features/posts/hooks/usePosts.js";
const PostFeedContainer = () => {
  const {
    posts,
    isLoadingInit,
    isLoadingNextPage,
    isDeletingPost,
    isLoadingLike,
    hasNextPage,
    deletePost,
    toggleLike,
    refetch,
    loadMore,
  } = usePosts(10);

  return (
    <PostFeedView
      posts={posts}
      isLoadingInit={isLoadingInit}
      isLoadingNextPage={isLoadingNextPage}
      isDeletingPost={isDeletingPost}
      isLoadingLike={isLoadingLike}
      hasNextPage={hasNextPage}
      deletePost={deletePost}
      toggleLike={toggleLike}
      refetch={refetch}
      loadMore={loadMore}
    />
  );
};

export { PostFeedContainer };
