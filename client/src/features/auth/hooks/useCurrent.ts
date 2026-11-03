import { useEffect, useState } from "react";
import { fetchCurrent, type User } from "@/features/users/api/user.api.js";

const useCurrent = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const getCurrent = async () => {
      try {
        const current = await fetchCurrent(controller.signal);
        setUser(current);
      } catch (err) {
        if (!controller.signal.aborted) {
          // No valid session, or another request error;
          setUser(null);
        }
        console.error(err);
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };
    getCurrent();

    return () => controller.abort();
  }, []);

  return { user, setUser, isLoading };
};

export { useCurrent };
