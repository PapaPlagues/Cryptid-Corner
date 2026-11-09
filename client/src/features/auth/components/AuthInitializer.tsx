import { useEffect } from "react";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";

const AuthInitializer = () => {
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    const controller = new AbortController();

    initialize(controller.signal);

    return () => controller.abort();
  }, [initialize]);

  return null;
};

export { AuthInitializer };
