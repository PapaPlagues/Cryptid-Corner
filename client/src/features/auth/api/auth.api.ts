import { request } from "@/shared/services/request.js";

type SignupData = {
  username: string;
  password: string;
};

const login = async (data: SignupData) => {
  const json = await request("api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return json;
};

const guestLogin = async () => {};

const signup = async (data: SignupData) => {
  const json = await request("api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return json;
};

export { login, signup };
