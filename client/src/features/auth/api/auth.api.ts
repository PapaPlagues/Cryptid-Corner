import { request } from "@/shared/services/request.js";

const login = async () => {};

const guestLogin = async () => {};

type SignupData = {
  username: string;
  password: string;
};

const signup = async (data: SignupData) => {
  const json = await request("api/auth/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return json;
};

export { signup };
