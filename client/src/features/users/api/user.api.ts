import { request } from "@/shared/services/request.js";
import type { User } from "@/shared/types/user.types.js";

const fetchCurrent = async (signal?: AbortSignal): Promise<User> => {
  const data = await request("api/current", {
    method: "GET",
    signal,
  });
  return data;
};

const fetchUser = async (
  userId: string,
  signal?: AbortSignal,
): Promise<User | null> => {
  const data = await request(`api/users/${userId}`, {
    method: "GET",
    signal,
  });

  return data;
};

const fetchUsers = async () => {
  const data = await request("api/users", {
    method: "GET",
  });

  return data;
};

export { fetchCurrent, fetchUser, fetchUsers };
