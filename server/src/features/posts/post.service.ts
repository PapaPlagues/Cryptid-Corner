import { setLikes } from "#features/posts/like.services.js";

type PostWithLikes = {
  likers: { id: string }[];
  _count: {
    likers: number;
    comments: number;
  };
};

const formatPostData = <T extends PostWithLikes>(post: T) => {
  const postWithlikes = setLikes(post);
  const { _count: count, ...formattedPosts } = postWithlikes;
  return {
    ...formattedPosts,
    commentCount: count.comments ? count.comments : 0,
  };
};

export { formatPostData };
