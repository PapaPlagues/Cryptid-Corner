const SERVER_BASE_URL = import.meta.env.VITE_API_URI;

const fetchPosts = async () => {
  const response = await fetch(`${SERVER_BASE_URL}/api/posts`, {
    credentials: "include",
  });

  const json = await response.json();

  if (!response.ok) {
    const error = new Error();
    error.name = json.name;
    error.message = json.message;

    throw error;
  }
  return json;
};

export { fetchPosts };
