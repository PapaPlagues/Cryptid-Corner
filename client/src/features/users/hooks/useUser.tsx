import { useEffect } from "react";
import { useUserStore } from "@/features/users/stores/users.store.js";

const useUser = (userId: string) => {
  const user = useUserStore((state) => state.selectedUser);
  const isLoading = useUserStore((state) => state.isLoadingUser);
  const getUser = useUserStore((state) => state.getUser);

  useEffect(() => {
    getUser(userId);
  }, [userId, getUser]);

  return { user, isLoading };
};

export { useUser };
