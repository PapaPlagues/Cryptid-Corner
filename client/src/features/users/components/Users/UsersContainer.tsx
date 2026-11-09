import { UsersView } from "@/features/users/components/Users/UsersView.js";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";
import { useUsers } from "@/features/users/hooks/useUsers.js";

const UsersContainer = () => {
  const user = useAuthStore((state) => state.user);
  const { users, isLoading, refetch } = useUsers();

  const usersWithoutSelf = users
    ? users.filter((currentUser) => currentUser.id != user?.id)
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
