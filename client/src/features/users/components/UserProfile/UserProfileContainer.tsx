import { UserProfileView } from "@/features/users/components/UserProfile/UserProfileView.js";
import { useUser } from "@/features/users/hooks/useUser.js";
import { usePosts } from "@/features/posts/hooks/usePosts.js";

type UserProfileContainerProps = {
  userId: string;
};

const UserProfileContainer = ({ userId }: UserProfileContainerProps) => {
  const { user, isLoading: isLoadingUser } = useUser(userId);

  const {
    posts,
    isLoadingPosts,
    isLoadingNextPage,
    hasNextPage,
    refetch,
    loadMore,
  } = usePosts(10, userId);

  return (
    <UserProfileView
      // User Info
      user={user}
      isLoadingUser={isLoadingUser}
      // User Posts
      posts={posts}
      isLoadingPosts={isLoadingPosts}
      isLoadingNextPage={isLoadingNextPage}
      hasNextPage={hasNextPage}
      refetch={refetch}
      loadMore={loadMore}
    />
  );
};

export { UserProfileContainer };
