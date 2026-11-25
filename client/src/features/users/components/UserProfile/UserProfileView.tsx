import type { User } from "@/shared/types/user.types.js";
import { UserInfo } from "@/features/users/components/UserInfo.js";
import { UserPosts } from "@/features/users/components/UserPosts.js";
import type { Post } from "@/shared/types/post.types.js";
import { Scrollable } from "@/shared/components/Scrollable.js";
type UserProfileProps = {
  user: User | null;
  isLoadingUser: boolean;
  handleFollowUser: (userId: string) => Promise<void>;
  handleUnfollowUser: (userId: string) => Promise<void>;
  isLoadingFollow: boolean;
  posts: Post[];
  isLoadingPosts: boolean;
  isLoadingNextPage: boolean;
  hasNextPage: boolean;
  refetch: () => Promise<void>;
  loadMore: () => Promise<void>;
};

const UserProfileView = ({
  // User Info
  user,
  isLoadingUser,
  handleFollowUser,
  handleUnfollowUser,
  isLoadingFollow,
  // User Posts
  posts,
  hasNextPage,
  isLoadingPosts,
  isLoadingNextPage,
  isLoadingLike,
  toggleLike,
  refetch,
  loadMore,
}: UserProfileProps) => {
  if (!user) return <p>User not found.</p>;
  if (isLoadingUser) return <p>Loading profile...</p>;

  return (
    <Scrollable
      className="flex flex-1 flex-col"
      hasMore={hasNextPage}
      isLoadingMore={isLoadingNextPage}
      onReachBottom={loadMore}
    >
      {/* User  */}
      <UserInfo
        user={user}
        isLoadingUser={isLoadingUser}
        handleFollowUser={handleFollowUser}
        handleUnfollowUser={handleUnfollowUser}
        isLoadingFollow={isLoadingFollow}
      />
      {/* Posts */}
      <UserPosts
        posts={posts}
        isLoadingPosts={isLoadingPosts}
        isLoadingNextPage={isLoadingNextPage}
        hasNextPage={hasNextPage}
        refetch={refetch}
        loadMore={loadMore}
        isLoadingLike={isLoadingLike}
        toggleLike={toggleLike}
      />
    </Scrollable>
  );
};

export { UserProfileView };
