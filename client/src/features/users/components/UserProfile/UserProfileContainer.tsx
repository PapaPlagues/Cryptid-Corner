import { UserProfileView } from "@/features/users/components/UserProfile/UserProfileView.js";
import { useUser } from "@/features/users/hooks/useUser.js";
import { usePosts } from "@/features/posts/hooks/usePosts.js";
import { useUserStore } from "@/features/users/stores/users.store.js";

type UserProfileContainerProps = {
  userId: string;
};

const UserProfileContainer = ({ userId }: UserProfileContainerProps) => {
  const followUser = useUserStore((state) => state.followUser);
  const unfollowUser = useUserStore((state) => state.unfollowUser);
  const isLoadingFollow = useUserStore((state) => state.isLoadingFollow);

  const {
    user,
    isLoading: isLoadingUser,
    refetch: refetchUser,
  } = useUser(userId);

  const {
    posts,
    isLoadingPosts,
    isLoadingNextPage,
    hasNextPage,
    isLoadingLike,
    toggleLike,
    refetch,
    loadMore,
  } = usePosts(10, userId);

  const handleFollowUser = async (userId: string) => {
    await followUser(userId);
    await refetchUser();
  };

  const handleUnfollowUser = async (userId: string) => {
    await unfollowUser(userId);
    await refetchUser();
  };

  return (
    <UserProfileView
      // User Info
      user={user}
      isLoadingUser={isLoadingUser}
      handleFollowUser={handleFollowUser}
      handleUnfollowUser={handleUnfollowUser}
      isLoadingFollow={isLoadingFollow}
      isLoadingLike={isLoadingLike}
      // User Posts
      posts={posts}
      isLoadingPosts={isLoadingPosts}
      isLoadingNextPage={isLoadingNextPage}
      hasNextPage={hasNextPage}
      toggleLike={toggleLike}
      refetch={refetch}
      loadMore={loadMore}
    />
  );
};

export { UserProfileContainer };
