import { RotateCw } from "lucide-react";
import { Posts } from "@/features/posts/components/Posts.js";
import type { Post } from "@/shared/types/post.types.js";
import { CreatePost } from "@/features/posts/components/CreatePost.js";
import { Scrollable } from "@/shared/components/Scrollable.js";

type PostFeedProps = {
  posts: Post[];
  isLoadingInit: boolean;
  isLoadingNextPage: boolean;
  hasNextPage: boolean;
  refetchPosts: () => Promise<void>;
  loadMore: () => Promise<void>;
};

const PostFeedView = ({
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
  feedType,
  setFeedType,
}: PostFeedProps) => {
  const handleFeedChange = (type) => {
    setFeedType(type);
    refetchPosts();
  };

  return (
    <Scrollable
      className="flex flex-1 flex-col"
      hasMore={hasNextPage}
      isLoadingMore={isLoadingNextPage}
      onReachBottom={loadMore}
    >
      <section className="flex flex-col gap-4 border-b pb-4">
        {/* Feed heading */}
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button
              className={`border-b-2 py-2 text-base font-semibold ${
                feedType === "following"
                  ? "border-primary"
                  : "border-transparent text-muted-foreground"
              }`}
              onClick={() => handleFeedChange("following")}
              disabled={isLoadingInit}
            >
              For You
            </button>
            <button
              className={`border-b-2 py-2 text-base font-semibold ${
                feedType === "all"
                  ? "border-primary"
                  : "border-transparent text-muted-foreground"
              }`}
              onClick={() => handleFeedChange("all")}
              disabled={isLoadingInit}
            >
              All
            </button>
          </div>

          <button
            type="button"
            onClick={refetchPosts}
            disabled={isLoadingInit}
            className="rounded-md p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label="Refresh feed"
          >
            <RotateCw size={20} />
          </button>
        </header>

        {/* Create post */}
        <CreatePost />
      </section>

      {/* Posts */}
      <section className="mt-5">
        <Posts
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
        />
      </section>
    </Scrollable>
  );
};

export { PostFeedView };
