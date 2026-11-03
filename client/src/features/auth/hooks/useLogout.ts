import { useNavigate } from "react-router";
import { logout as requestLogout } from "@/features/auth/api/auth.api.js";

const useLogout = () => {
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await requestLogout();
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return { logout };
};

export { useLogout };
