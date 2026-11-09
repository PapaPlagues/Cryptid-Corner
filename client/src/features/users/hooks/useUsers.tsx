import { useEffect } from "react";
import { useUserStore } from "@/features/users/stores/users.store.js";

const useUsers = () => {
  const users = useUserStore((state) => state.users);
  const isLoading = useUserStore((state) => state.isLoadingUsers);
  const getUsers = useUserStore((state) => state.getUsers);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return { users, isLoading, refetch: getUsers };
};

export { useUsers };
