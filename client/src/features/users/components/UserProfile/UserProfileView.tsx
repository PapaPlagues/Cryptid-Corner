import type { User } from "@/shared/types/user.types.js";
import { UserInfo } from "@/features/users/components/UserInfo.js";
import { UserPosts } from "@/features/users/components/UserPosts.js";
import type { Post } from "@/shared/types/post.types.js";
type UserProfileProps = {
  user: User | null;
  isLoadingUser: boolean;
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
  // User Posts
  posts,
  hasNextPage,
  isLoadingPosts,
  isLoadingNextPage,
  refetch,
  loadMore,
}: UserProfileProps) => {
  if (!user) return <p>User not found.</p>;
  if (isLoadingUser) return <p>Loading profile...</p>;

  return (
    <div>
      {/* User  */}
      <UserInfo user={user} isLoadingUser={isLoadingUser} />
      {/* Posts */}
      <UserPosts
        posts={posts}
        isLoadingPosts={isLoadingPosts}
        isLoadingNextPage={isLoadingNextPage}
        hasNextPage={hasNextPage}
        refetch={refetch}
        loadMore={loadMore}
      />
    </div>
  );
};

export { UserProfileView };
