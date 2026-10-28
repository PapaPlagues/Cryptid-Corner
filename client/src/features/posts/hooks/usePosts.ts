import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { fetchPosts } from "@/features/posts/api/posts.api.js";

const usePosts = () => {
  // Feed state
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        console.log(data);

        // Store the posts in react state
        setPosts(Array.isArray(data) ? data : (data.posts ?? []));
      } catch (error) {
        setError(`${error}, Something went wrong.`);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  return {
    posts,
    isLoading,
    error,
  };
};

export { usePosts };
