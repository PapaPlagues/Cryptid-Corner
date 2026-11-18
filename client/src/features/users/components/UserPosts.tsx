import { Posts } from "@/features/posts/components/Posts.js";

const UserPosts = ({
  posts,
  hasNextPage,
  isLoadingPosts,
  isLoadingNextPage,
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
        />
      </div>
    </section>
  );
};

export { UserPosts };
