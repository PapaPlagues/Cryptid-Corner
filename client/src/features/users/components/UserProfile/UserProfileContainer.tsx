import { UserProfileView } from "@/features/users/components/UserProfile/UserProfileView.js";
import { useUser } from "@/features/users/hooks/useUser.js";

type UserProfileContainerProps = {
  userId: string;
};

const UserProfileContainer = ({ userId }: UserProfileContainerProps) => {
  const { user, isLoading: isLoadingUser } = useUser(userId);

  return (
    <UserProfileView
      // User Info
      user={user}
      isLoadingUser={isLoadingUser}
    />
  );
};

export { UserProfileContainer };
