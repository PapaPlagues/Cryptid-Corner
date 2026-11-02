import { ApiError } from "@/shared/errors/ApiError.js";
const SERVER_BASE_URL = import.meta.env.VITE_API_URI;

const request = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${SERVER_BASE_URL}/${endpoint}`, {
    ...options,
    credentials: "include",
  });
  const data = await response.json();

  if (!response.ok) {
    throw new ApiError(
      data.message ?? data.error ?? "Something went wrong",
      response.status,
      data.validationErrors,
    );
  }
  return data;
};

export { request };
