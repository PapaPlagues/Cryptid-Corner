import { useCallback, useContext, useEffect, useRef, useState } from "react";

const usePosts = () => {
  // Feed state
  const [posts, setPosts] = useState([]);

  return {
    posts,
  };
};

export { usePosts };
