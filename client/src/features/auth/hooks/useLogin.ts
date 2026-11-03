import { useState } from "react";
import { login as requestLogin } from "@/features/auth/api/auth.api.js";
type FormData = {
  username: string;
  password: string;
};

const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = async (formData: FormData) => {
    setIsLoading(true);
    try {
      const data = await requestLogin(formData);
      return data;
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};

export { useLogin };
