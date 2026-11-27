import { Posts } from "@/features/posts/components/Posts.js";
import { RotateCw } from "lucide-react";

const UserPosts = ({
  posts,
  hasNextPage,
  isLoadingInit,
  isLoadingNextPage,
  isLoadingLike,
  toggleLike,
  refetchPosts,
  loadMore,
}) => {
  return (
    <section>
      <div className="flex items-center justify-between py-3">
        <div>
          <p>Posts</p>
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
      </div>

      <div>
        <Posts
          posts={posts}
          isLoadingInit={isLoadingInit}
          isLoadingNextPage={isLoadingNextPage}
          hasNextPage={hasNextPage}
          refetchPosts={refetchPosts}
          loadMore={loadMore}
          isLoadingLike={isLoadingLike}
          toggleLike={toggleLike}
        />
      </div>
    </section>
  );
};

export { UserPosts };
