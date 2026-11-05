import { UsersView } from "@/features/users/components/Users/UsersView.js";
import { useContext } from "react";
import { CurrentContext } from "@/features/auth/context/CurrentContext.js";
import { useUsers } from "@/features/users/hooks/useUsers.js";

const UsersContainer = () => {
  const context = useContext(CurrentContext);

  if (!context) {
    throw new Error("UsersContainer must be used within CurrentProvider");
  }

  const { user: currentUser } = context;
  const { users, isLoading, refetch } = useUsers();

  const usersWithoutSelf = users
    ? users.filter((user) => user.id != currentUser?.id)
    : [];

  return (
    <UsersView
      users={usersWithoutSelf}
      isLoadingUsers={isLoading}
      refetchUsers={refetch}
    />
  );
};

export { UsersContainer };
