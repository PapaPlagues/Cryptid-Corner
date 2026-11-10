import type { User } from "@/shared/types/user.types.js";
import { UserInfo } from "@/features/users/components/UserInfo.js";
import { UserPosts } from "@/features/users/components/UserPosts.js";

type UserProfileProps = {
  user: User | null;
  isLoadingUser: boolean;
};

const UserProfileView = ({ user, isLoadingUser }: UserProfileProps) => {
  if (!user) return <p>User not found.</p>;
  if (isLoadingUser) return <p>Loading profile...</p>;

  return (
    <div>
      {/* User  */}
      <UserInfo user={user} isLoadingUser={isLoadingUser} />
      {/* Posts */}
      <UserPosts />
    </div>
  );
};

export { UserProfileView };
