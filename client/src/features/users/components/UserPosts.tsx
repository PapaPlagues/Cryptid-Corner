import { Posts } from "@/features/posts/components/Posts.js";

const UserPosts = ({
  posts,
  hasNextPage,
  isLoadingPosts,
  isLoadingNextPage,
  isLoadingLike,
  toggleLike,
  refetch,
  loadMore,
}) => {
  return (
    <section>
      <div>
        <div>
          <p>Posts</p>
        </div>

        <div>
          <p>Refresh</p>
        </div>
      </div>

      <div>
        <Posts
          posts={posts}
          isLoadingPosts={isLoadingPosts}
          isLoadingNextPage={isLoadingNextPage}
          hasNextPage={hasNextPage}
          refetch={refetch}
          loadMore={loadMore}
          isLoadingLike={isLoadingLike}
          toggleLike={toggleLike}
        />
      </div>
    </section>
  );
};

export { UserPosts };
