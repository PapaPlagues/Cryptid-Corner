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

const patchUserBio = async (bio: string): Promise<User> => {
  const data = await request("api/current/bio", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      bio,
    }),
  });
  return data;
};

const patchUserAvatar = async (fileFormData: FormData) => {
  const data = await request(`/current/avatar`, {
    method: "PATCH",
    body: fileFormData,
  });
  return data;
};

export { fetchCurrent, fetchUser, fetchUsers, patchUserBio, patchUserAvatar };
