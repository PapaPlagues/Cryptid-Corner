import { PostFeedView } from "@/features/posts/components/PostFeed/PostFeedView.js";
import { usePosts } from "@/features/posts/hooks/usePosts.js";
const PostFeedContainer = () => {
  const {
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
    refetchPosts,
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
      refetchPosts={refetchPosts}
      loadMore={loadMore}
      feedType={feedType}
      setFeedType={setFeedType}
    />
  );
};

export { PostFeedContainer };
