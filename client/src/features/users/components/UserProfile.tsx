import { useUser } from "@/features/users/hooks/useUser.js";
type UserProfileProps = {
  userId: string;
};

const UserProfile = ({ userId }: UserProfileProps) => {
  const { user, isLoading } = useUser(userId);

  if (isLoading) return <p>Loading profile...</p>;
  if (!user) return <p>User not found.</p>;

  return (
    <div>
      <h1>{user.username}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

export { UserProfile };
