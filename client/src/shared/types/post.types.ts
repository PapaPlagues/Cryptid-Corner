export type Post = {
  id: string;
  content: string;
  media: string | null;
  createdAt: string;
  authorId: string;
  commentCount: number;
};
