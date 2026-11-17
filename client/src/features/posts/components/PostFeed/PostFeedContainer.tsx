import { PostFeedView } from "@/features/posts/components/PostFeed/PostFeedView.js";
import { usePosts } from "@/features/posts/hooks/usePosts.js";
const PostFeedContainer = () => {
  const {
    posts,
    isLoadingPosts,
    isLoadingNextPage,
    hasNextPage,
    refetch,
    loadMore,
  } = usePosts(10);

  return (
    <PostFeedView
      posts={posts}
      isLoadingPosts={isLoadingPosts}
      isLoadingNextPage={isLoadingNextPage}
      hasNextPage={hasNextPage}
      refetch={refetch}
      loadMore={loadMore}
    />
  );
};

export { PostFeedContainer };
