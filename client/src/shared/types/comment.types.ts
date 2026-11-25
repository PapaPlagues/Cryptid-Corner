export type Comment = {
  id: string;
  content: string;
  createdAt: string;
  authorId: string;
  postId: string;

  author: {
    id: string;
    username: string;
    avatar: string | null;
  };

  hasLiked: boolean;
  likeCount: number;
};
