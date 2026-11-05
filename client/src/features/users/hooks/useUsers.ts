import { useState, useEffect, useCallback } from "react";
import type { User } from "@/shared/types/user.types.js";
import { fetchUsers } from "@/features/users/api/user.api.js";

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);

      const data = await fetchUsers();
      setUsers(data.users);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    Promise.resolve().then(() => getUsers());
  }, [getUsers]);

  return { users, isLoading, refetch: getUsers };
};

export { useUsers };
