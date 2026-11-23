type User = {
  id: string;
  username: string;
  bio: string | null;
  avatar: string | null;
  followersCount: number;
  followingCount: number;
  postCount: number;
  isFollowing: boolean;
};

export type { User };
