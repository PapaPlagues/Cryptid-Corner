const SERVER_BASE_URL = import.meta.env.VITE_API_URI;
import { request } from "@/shared/services/request.js";

export type CreatePostData = {
  content: string;
};

const fetchPosts = async (
  cursor: string | null = null,
  limit = 20,
  userId: string | null = null,
) => {
  const params = new URLSearchParams();
  params.append("limit", String(limit));
  if (cursor) params.append("cursor", cursor);
  if (userId) params.append("userId", userId);

  const data = await request(`api/posts?${params.toString()}`, {
    method: "GET",
  });
  return data;
};

const createPost = async (postData: CreatePostData) => {
  const data = await request(`api/posts`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  });
  return data;
};

export { fetchPosts, createPost };
