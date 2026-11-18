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
  refetch: () => Promise<void>;
  loadMore: () => Promise<void>;
};

const PostFeedView = ({
  posts,
  isLoadingInit,
  isLoadingNextPage,
  hasNextPage,
  refetch,
  loadMore,
}: PostFeedProps) => {
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
            <button className="border-b-2 border-primary py-2 text-base font-semibold">
              For You
            </button>
            <button className="border-b-2 border-transparent py-2 text-base font-medium text-muted-foreground">
              All
            </button>
          </div>

          <button
            type="button"
            onClick={refetch}
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
        />
      </section>
    </Scrollable>
  );
};

export { PostFeedView };
