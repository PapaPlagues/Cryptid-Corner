import { PostFeedView } from "@/features/posts/components/PostFeed/PostFeedView.js";
import { usePosts } from "@/features/posts/hooks/usePosts.js";
const PostFeedContainer = () => {
  const { posts, isLoadingPosts, refetch } = usePosts();
  return <PostFeedView posts={posts} />;
};

export { PostFeedContainer };
