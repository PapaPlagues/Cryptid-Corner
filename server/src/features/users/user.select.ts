const userSelect = (requesterId: string) => {
  return {
    id: true,
    username: true,
    bio: true,
    avatar: true,
    _count: {
      select: {
        followers: true,
        following: true,
        posts: true,
      },
    },
    followers: {
      select: {
        id: true,
      },
      where: {
        id: requesterId,
      },
    },
  };
};

const USER_SELECT_BASIC = {
  id: true,
  username: true,
  avatar: true,
};

export { userSelect, USER_SELECT_BASIC };
