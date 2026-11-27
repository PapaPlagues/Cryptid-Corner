export type Post = {
  id: string;
  content: string;
  media: string | null;
  createdAt: string;
  authorId: string;
  isSelfHosted: boolean;
  author: {
    id: string;
    username: string;
    avatar: string | null;
  };
  hasLiked: boolean;
  likeCount: number;
  commentCount: number;
};
