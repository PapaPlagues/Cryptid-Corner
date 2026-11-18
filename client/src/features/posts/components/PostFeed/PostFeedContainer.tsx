import { PostFeedView } from "@/features/posts/components/PostFeed/PostFeedView.js";
import { usePosts } from "@/features/posts/hooks/usePosts.js";
const PostFeedContainer = () => {
  const {
    posts,
    isLoadingInit,
    isLoadingNextPage,
    hasNextPage,
    refetch,
    loadMore,
  } = usePosts(10);

  return (
    <PostFeedView
      posts={posts}
      isLoadingInit={isLoadingInit}
      isLoadingNextPage={isLoadingNextPage}
      hasNextPage={hasNextPage}
      refetch={refetch}
      loadMore={loadMore}
    />
  );
};

export { PostFeedContainer };
