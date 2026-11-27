import type { Post as PostType } from "@/shared/types/post.types.js";
import { Post } from "@/features/posts/components/Post.js";
import { PostSkeleton } from "@/features/posts/components/PostSkeleton.js";

type PostsProps = {
  posts: PostType[];
  isLoadingInit: boolean;
  isLoadingNextPage: boolean;
};

const Posts = ({
  posts,
  isLoadingInit,
  isLoadingNextPage,
  isDeletingPost,
  isLoadingLike,
  hasNextPage,
  deletePost,
  toggleLike,
  refetchPosts,
  loadMore,
}: PostsProps) => {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <Post
          post={post}
          key={post.id}
          isLoadingInit={isLoadingInit}
          toggleLike={toggleLike}
          isLoadingLike={isLoadingLike}
          deletePost={deletePost}
        />
      ))}
      {isLoadingNextPage &&
        Array.from({ length: 3 }, (_, index) => (
          <PostSkeleton key={`next-page-${index}`} />
        ))}
    </div>
  );
};

export { Posts };
