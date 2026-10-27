import { usePosts } from "@/features/posts/hooks/usePosts.js";
import { PostFeedView } from "@/features/posts/components/PostFeed/PostFeedView.js";

const PostFeedContainer = () => {
  const { posts } = usePosts();

  return <PostFeedView posts={posts} />;
};

export { PostFeedContainer };
