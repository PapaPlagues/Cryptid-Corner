import { request } from "@/shared/services/request.js";

type User = {
  id: string;
  username: string;
  bio: string | null;
  avatar: string | null;
};

const fetchCurrent = async (signal?: AbortSignal): Promise<User> => {
  return await request("api/current", {
    method: "GET",
    signal,
  });
};

export { fetchCurrent };
export type { User };
