import type { User } from "@/features/users/api/user.api.js";
import { UserInfo } from "@/features/users/components/UserInfo.js";

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
      <p>Posts</p>
    </div>
  );
};

export { UserProfileView };
