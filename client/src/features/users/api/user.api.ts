import { request } from "@/shared/services/request.js";

type User = {
  id: string;
  username: string;
  bio: string | null;
  avatar: string | null;
};

const fetchCurrent = async (signal?: AbortSignal): Promise<User> => {
  const data = await request("api/current", {
    method: "GET",
    signal,
  });
  return data;
};

const fetchUser = async (userId: string, signal?: AbortSignal) => {
  const data = await request(`api/users/${userId}`, {
    method: "GET",
    signal,
  });

  return data;
};

export { fetchCurrent, fetchUser };
export type { User };
