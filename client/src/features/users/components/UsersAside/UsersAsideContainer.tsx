import { UsersAsideView } from "@/features/users/components/UsersAside/UsersAsideView.js";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";
import { useUsers } from "@/features/users/hooks/useUsers.js";

const UsersAsideContainer = () => {
  const user = useAuthStore((state) => state.user);
  const { users, isLoading } = useUsers();

  const usersWithoutSelf = users
    ? users.filter((currentUser) => currentUser.id != user?.id)
    : [];
  return <UsersAsideView users={usersWithoutSelf} isLoadingUsers={isLoading} />;
};

export { UsersAsideContainer };
