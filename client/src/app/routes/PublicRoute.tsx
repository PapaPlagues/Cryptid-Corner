import { Navigate, Outlet } from "react-router";
import { useAuthStore } from "@/features/auth/stores/auth.store.js";

const PublicRoute = () => {
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) return null;

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};

export { PublicRoute };
