import { setLikes } from "#features/posts/like.services.js";

type CommentWithLikes = {
  id: string;
  content: string;
  createdAt: Date;
  authorId: string;
  author: {
    id: string;
    username: string;
    avatar: string | null;
  };
  likers: { id: string }[];
  _count: { likers: number };
};

const formatCommentData = (comment: CommentWithLikes) => {
  const commentsWithLikes = setLikes(comment);
  const { _count: _count, ...formatComments } = commentsWithLikes;
  return formatComments;
};

export { formatCommentData };
