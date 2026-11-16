import { request } from "@/shared/services/request.js";

type SignupData = {
  username: string;
  password: string;
};

const login = async (signupData: SignupData) => {
  const data = await request("api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupData),
  });
  return data;
};

const guestLogin = async () => {
  const data = await request("api/auth/guest-login", {
    method: "POST",
  });
  return data;
};

const signup = async (signupData: SignupData) => {
  const data = await request("api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(signupData),
  });
  return data;
};

const logout = async () => {
  return await request("api/auth/logout", {
    method: "POST",
  });
};

export { login, guestLogin, signup, logout };
