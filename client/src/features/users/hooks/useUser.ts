import { useState, useEffect } from "react";
import type { User } from "@/shared/types/user.types.js";
import { fetchUser } from "@/features/users/api/user.api.js";

const useUser = (userId: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const currentUser = await fetchUser(userId);
        setUser(currentUser);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, [userId]);

  return { user, isLoading };
};

export { useUser };
